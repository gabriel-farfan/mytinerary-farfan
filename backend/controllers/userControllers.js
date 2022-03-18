const User = require("../models/usersModel");
const bcryptjs = require("bcryptjs");
const crypto = require("crypto"); //NPM CRYPTO
const nodemailer = require("nodemailer"); //NPM NODEMAILER
const jwt = require("jsonwebtoken");

const sendEmail = async (email, uniqueString) => {
  //FUNCION ENCARGADA DE ENVIAR EL EMAIL

  const transporter = nodemailer.createTransport({
    //DEFINIMOS EL TRASPORTE UTILIZANDO NODEMAILER
    host: "smtp.gmail.com", //DEFINIMOS LO PARAMETROS NECESARIOS
    port: 465,
    secure: true,
    auth: {
      user: "farfan.test@gmail.com", //DEFINIMOS LOS DATOS DE AUTORIZACION DE NUESTRO PROVEEDOR DE
      pass: "Casa1985..", //COREO ELECTRONICO, CONFIGURAR CUAENTAS PARA PERMIR EL USO DE APPS
    }, //CONFIGURACIONES DE GMAIL
  });

  // EN ESTA SECCION LOS PARAMETROS DEL MAIL
  let sender = "farfan.test@gmail.com";
  let mailOptions = {
    from: sender, //DE QUIEN
    to: email, //A QUIEN
    subject: "User Email Verification", //EL ASUNTO Y EN HTML EL TEMPLATE PARA EL CUERPO DE EMAIL Y EL LINK DE VERIFICACION
    html: `
        <div >
        <h1 style="color:red">Tap <a href=http://localhost:4000/api/verify/${uniqueString}>Here</a> to confirm your Email... Thank you! </h1>
        </div>
        `,
  };
  await transporter.sendMail(mailOptions, function (error, response) {
    //SE REALIZA EL ENVIO
    if (error) {
      console.log(error);
    } else {
      console.log("Message sent");
    }
  });
};

const usersControllers = {
  verifyEmail: async (req, res) => {
    const { uniqueString } = req.params; //EXTRAE EL EL STRING UNICO DEL LINK

    const user = await User.findOne({ uniqueString: uniqueString });
    // console.log(user); //BUSCA AL USUARIO CORRESPONDIENTE AL LINK
    if (user) {
      user.emailVerificado = true; //COLOCA EL CAMPO emailVerified en true
      await user.save();
      res.redirect("http://localhost:3000/"); //REDIRECCIONA AL USUARIO A UNA RUTA DEFINIDA
      //return  res.json({success:true, response:"Su email se ha verificado correctamente"})
    } else {
      res.json({ success: false, response: "Your email has not been verified" });
    }
  },

  signUpUsers: async (req, res) => {
    // console.log(req.body);
    let { fullName, email, password, image, from, pais } = req.body.userData;

    const test = req.body.test;

    try {
      const usuarioExiste = await User.findOne({ email }); //BUSCAR SI EL USUARIO YA EXISTE EN DB
      
      if (usuarioExiste) {
        // console.log(usuarioExiste.from.indexOf(from));
        if (usuarioExiste.from.indexOf(from) !== -1) {
          // console.log(
          //   "resultado de if " + (usuarioExiste.from.indexOf(from) !== 0)
          // ); //INDEXOF = 0 EL VALOR EXISTE EN EL INDICE EQ A TRUE -1 NO EXITE EQ A FALSE
          res.json({
            success: false,
            from: "signup",
            message:
              "You have already made your SignUp in this way... Please SignIn",
          });
        } else {
          const contraseñaHasheada = bcryptjs.hashSync(password, 10);
          usuarioExiste.from.push(from);
          usuarioExiste.password.push(contraseñaHasheada);
          if (from === "form-Signup") {
            //PORSTERIORMENTE AGREGAREMOS LA VERIFICACION DE EMAIL
            usuarioExiste.uniqueString = crypto.randomBytes(15).toString("hex");
            await usuarioExiste.save();
            await sendEmail(email, usuarioExiste.uniqueString); //LLAMA A LA FUNCION ENCARGADA DEL ENVIO DEL CORREO ELECTRONICO

            res.json({
              success: true,
              from: "signup",
              message:
                "We sent you an email to validate it. Please check your email box to complete the signUp and add it to your SignIn methods ",
            });
          } else {
            usuarioExiste.save();

            res.json({
              success: true,
              from: "signup",
              message:
                "We add " + from + " to perform signIn",
            });
          }
        }
      } else {
        //SI EL USUARIO NO ESXITE

        const contraseñaHasheada = bcryptjs.hashSync(password, 10); //LO CREA Y ENCRIPTA LA CONTRASEÑA
        console.log(contraseñaHasheada);
        // CREA UN NUEVO OBJETO DE PERSONAS CON SU USUARIO Y CONTRASEÑA (YA ENCRIPTADA)
        const nuevoUsuario = await new User({
          fullName,
          email,
          password: [contraseñaHasheada],
          uniqueString: crypto.randomBytes(15).toString("hex"),
          emailVerificado: false,
          image,
          from: [from],
          pais,
        });

        //SE LO ASIGNA AL USUARIO NUEVO
        if (from !== "form-Signup") {
          //SI LA PETICION PROVIENE DE CUENTA GOOGLE
          await nuevoUsuario.save();
          res.json({
            success: true,
            from: "signup",
            message: "Congratulations! your user has been created with " + from,
          }); // AGREGAMOS MENSAJE DE VERIFICACION
        } else {
          //PASAR EMAIL VERIFICADO A FALSE
          //ENVIARLE EL E MAIL PARA VERIFICAR
          await nuevoUsuario.save();
          await sendEmail(email, nuevoUsuario.uniqueString); //LLAMA A LA FUNCION ENCARGADA DEL ENVIO DEL CORREO ELECTRONICO

          res.json({
            success: true,
            from: "siggup",
            message:
              "We sent you an email to validate it, please check your box to complete the signUp ",
          }); // AGREGAMOS MENSAJE DE VERIFICACION
        }
      }
    } catch (error) {
      console.log(error);
      res.json({
        success: false,
        message: "Something went wrong... Try again in a few minutes",
      }); //CAPTURA EL ERROR
    }
  },
  signInUser: async (req, res) => {
    const { email, password, from } = req.body.logedUser;
    try {
      const usuarioExiste = await User.findOne({ email });
      //METODO PARA BUSCAR PASSWORD MEDIANTE FROM
      console.log(usuarioExiste.from);
      console.log(from);
      const indexpass = usuarioExiste.from.indexOf(from);
      console.log(usuarioExiste.password[indexpass]);

      if (!usuarioExiste) {
        // PRIMERO VERIFICA QUE EL USUARIO EXISTA
        res.json({
          success: false,
          message: "Your user has not been registered... Please SignUp",
        });
      } else {
        if (from !== "form-Signup") {
          let contraseñaCoincide = usuarioExiste.password.filter((pass) =>
            bcryptjs.compareSync(password, pass)
          );

          if (contraseñaCoincide.length > 0) {
            const userData = {
              id: usuarioExiste._id,
              fullName: usuarioExiste.fullName,
              email: usuarioExiste.email,
              from: from,
            };
            await usuarioExiste.save();

            const token = jwt.sign({ ...userData }, process.env.SECRET_KEY, {
              expiresIn: 60 * 60 * 24,
            });

            res.json({
              success: true,
              from: from,
              response: { token, userData },
              message: "Welcome back " + userData.fullName,
            });
          } else {
            res.json({
              success: false,
              from: from,
              message:
                "You have not registered with " +
                from +
                "If you want to enter with this method you must do the SignUp with " +
                from,
            });
          }
        } else {
          if (usuarioExiste.emailVerificado) {
            let contraseñaCoincide = usuarioExiste.password.filter((pass) =>
              bcryptjs.compareSync(password, pass)
            );
            console.log(contraseñaCoincide);
            console.log("resultado de busqueda de contrasela: " + (contraseñaCoincide.length > 0));
            if (contraseñaCoincide.length > 0) {
              const userData = {
                id: usuarioExiste._id,
                fullName: usuarioExiste.fullName,
                email: usuarioExiste.email,
                image: usuarioExiste.image,
                from: from,
              };
              const token = jwt.sign({ ...userData }, process.env.SECRET_KEY, {
                expiresIn: 60 * 60 * 24,
              });

              res.json({
                success: true,
                from: from,
                response: { token, userData },
                message: "Welcome back " + userData.fullName,
              });
            } else {
              res.json({
                success: false,
                from: from,
                message: "The username or password do not match",
              });
            }
          } else {
            res.json({
              success: false,
              from: from,
              message:
                "You have not verified your email, please check your email box to complete your signUp",
            });
          }
        } //SI NO ESTA VERIFICADO
      }
    } catch (error) {
      console.log(error);
      res.json({
        success: false,
        message: "Something went wrong... Try again in a few minutes",
      });
    }
  },
  
  signOutUser: async (req, res) => {
    const email = req.body.closeuser;
    const user = await User.findOne({ email });
    await user.save();
    res.json(console.log("sesion cerrada " + email));
  },

  verificarToken: (req, res) => {
    console.log(req.user);
    if (!req.err) {
      res.json({
        success: true,
        response: {
          id: req.user.id,
          fullName: req.user.fullName,
          email: req.user.email,
          image: req.user.image,
          from: "token",
        },
        message: "Welcome back " + req.user.fullName,
      });
      
    } else {
      res.json({
        success: false,
        message: "Please SignIn again...",
      });
    }
  },
};
module.exports = usersControllers;
