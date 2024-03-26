const Joi = require('joi');

exports.regValidation = Joi.object({
    name: Joi.string().min(2).max(20).required().messages({ //לשנות את ההתרעות לעברית
        'string.empty':"השם אינו יכול להישאר ריק",
        'string.min':"השם חייב להכיל מינימום 2 תווים",
        'string.max':"השם יכול להכיל עד 20 תווים ",
    }),
    mail: Joi.string().email().messages({
        'string.email':"מייל לא תקין",
        'string.empty':"מייל לא יכול להישאר ריק",
    }),
    password: Joi.string().min(6).max(10).pattern(new RegExp('^[a-zA-Z0-9]{6,10}$')).messages({
        'string.pattern.base':"הסיסמא יכולה להכיל אותיות ומספרים בלבד",
        'string.min':"סיסמא חייבת להכיל לפחות 6 תווים",
        'string.max':"סיסמא יכולה להכיל עד 10 תווים",
    })
})

exports.loginValidation = Joi.object({
    mail: Joi.string().email().messages({
        'string.email':"מייל לא תקין",
        'string.empty':"מייל לא יכול להישאר ריק",
    }),
    password: Joi.string().min(6).max(10).pattern(new RegExp('^[a-zA-Z0-9]{6,10}$')).messages({
        'string.pattern.base':"הסיסמא יכולה להכיל אותיות ומספרים בלבד",
        'string.min':"סיסמא חייבת להכיל לפחות 6 תווים",
        'string.max':"סיסמא יכולה להכיל עד 10 תווים",
    })
})

