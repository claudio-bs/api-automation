const { spec, request } = require('pactum');
//const { eachLike, like } = require('pactum-matchers');

request.setBaseUrl('http://lojaebac.ebaconline.art.br');

let token;
beforeEach(async () => {
    token = await spec()
        .post('/public/authUser')
        .withJson({
            "email": "admin@admin.com",
            "password": "admin123"
        })
        .returns('data.token')

})

it('API - listagem de endereços', async () => {
    await spec()
        .get('/api/getUserAddresses')
        .withHeaders("Authorization", token)
        .expectStatus(200)
});
