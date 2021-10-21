import * as contentful from 'contentful';

export const client = contentful.createClient({
    space: process.env.CONTENFUL_SPACE,
    accessToken: process.env.CONTENFUL_TOKEN
})