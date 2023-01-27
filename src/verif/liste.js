import Joi from "joi";

export const commandeVerif = Joi.object({
    nom : Joi.string()
                .min(1)
                .max(255)
                .required(),
    email : Joi.string()
                .min(4)
                .max(255)
                .email({ tlds: { allow: false } })
                .required(),
    adresse : Joi.string()
                .min(7)
                .max(255)
                .regex(/^[^<>]*$/)
                .required(),
    commentaire : Joi.string()
                .min(4)
                .max(10000)
                .regex(/^[^<>]*$/)
                .required(),
})