const User = require('../models/patientModel');
const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/test-myhealthcare';
beforeAll(async () => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true
    });
});

afterAll(async () => {

    await mongoose.connection.close();
});

describe('User Schema test anything', () => {
    // the code below is for insert testing
    it('Add User testing anything', () => {
        const user = {
            'username': 'kritik',
            'password': 'ranjit'
        };

        return User.create(user)
            .then((pro_ret) => {
                expect(pro_ret.username).toEqual('kritik');
            });
    });
    //test for update
    it('to test the update', async () => {

        return User.findOneAndUpdate({ username: 'kritik' }, { $set: { username: 'test' } })
            .then((pp) => {
                expect(pp.password).toEqual('ranjit')
            })
    });
    // the code below is for delete testing
    it('to test the delete product is working or not', async () => {
        const status = await User.deleteMany();
        expect(status.ok).toBe(1);
    });
})