const Prescription = require('../models/prescriptionModel');
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

describe('Prescription Schema test anything', () => {
    // the code below is for insert testing
    it('Add Prescription testing anything', () => {
        const prescription = {
            'medicine_name': 'vicks',
            'start_date': '16/02/2020'
        };

        return Prescription.create(prescription)
            .then((pro_ret) => {
                expect(pro_ret.medicine_name).toEqual('vicks');
            });
    });
    //test for update
    it('to test the update', async () => {

        return Prescription.findOneAndUpdate({ medicine_name: 'vicks' }, { $set: { medicine_name: 'test' } })
            .then((pp) => {
                expect(pp.start_date).toEqual('16/02/2020')
            })
    });
    // the code below is for delete testing
    it('to test the delete is working or not', async () => {
        const status = await Prescription.deleteMany();
        expect(status.ok).toBe(1);
    });
})