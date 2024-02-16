const Joi = require('joi');

exports.regValidation = Joi.object({
    name: Joi.string().min(2).max(20).required().messages({ //לשנות את ההתרעות לעברית
        'string.empty':"Name can not be empty",
        'string.min':"Name must be at least 2 sybmols",
        'string.max':"Name must be maximun 20 sybmols",
    }),
    mail: Joi.string().email().messages({
        'string.email':"Incorecct email",
        'string.empty':"E-mail can not be empty",
    }),
    password: Joi.string().min(6).max(10).pattern(new RegExp('^[a-zA-Z0-9]{6,10}$')).messages({
        'string.pattern.base':"Password must includ only letters and numbers",
        'string.min':"Password must be at least 6 sybmols",
        'string.max':"Passord must be maximun 10 sybmols",
    })
})

exports.loginValidation = Joi.object({
    mail: Joi.string().email().messages({
        'string.email':"Incorecct email",
        'string.empty':"E-mail can not be empty",
    }),
    password: Joi.string().min(6).max(10).pattern(new RegExp('^[a-zA-Z0-9]{6,10}$')).messages({
        'string.pattern.base':"Password must includ only letters and numbers",
        'string.min':"Password must be at least 6 sybmols",
        'string.max':"Passord must be maximun 10 sybmols",
    })
})

