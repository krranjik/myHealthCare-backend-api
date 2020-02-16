const User = require('../models/doctorModel');
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

describe('Doctor Schema test anything', () => {
    // the code below is for insert testing
    it('Add Doctor testing anything', () => {
        const user = {
            'name': 'kritik',
            'department': 'emergency'
        };

        return User.create(user)
            .then((pro_ret) => {
                expect(pro_ret.name).toEqual('kritik');
            });
    });
    //test for update
    it('to test the update', async () => {

        return User.findOneAndUpdate({ name: 'kritik' }, { $set: { name: 'test' } })
            .then((pp) => {
                expect(pp.department).toEqual('emergency')
            })

    });
    // the code below is for delete testing
    it('to test the delete product is working or not', async () => {
        const status = await User.deleteMany();
        expect(status.ok).toBe(1);
    });




})