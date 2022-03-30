const joi = require('joi')

const validator = (req, res, next) => {
    const schema = joi.object({
        fullName: joi.string().max(20).min(3).trim().pattern(new RegExp('[a-zA-Z]')).required().messages({
            'string.min':'The NAME must contain more than 3 characters',
            'string.max':"The NAME must contain a maximum of 20 characters"
        }),

        email: joi.string().email({ minDomainSegments: 2 }).required().messages({
            'string.email':'Wrong Email format...'
        }),
        password: joi.string().pattern(new RegExp('[a-zA-Z0-9]')).required().trim().min(8).max(30).messages({
            'string.min':'The password must contain at least 8 characters and contain uppercase, lowercase and numbers.',
            'string.pattern':"The password must be alphanumeric and contain a number."
        }),
        image:joi.string(),
        pais: joi.string().max(20).min(3).trim().required().messages({
            'string.min':'The COUNTRY must contain more than 3 characters.',
            'string.max':"The COUNTRY must contain a maximum of 20 characters."
        }),
        
        from:joi.string(),
    })

    const validation = schema.validate(req.body.userData, {abortEarly:false})
       
    if (validation.error) {
        
        return res.json({success: false, from:"validator", message:validation.error.details})
    }
    
    next()
    
    
}

module.exports = validator