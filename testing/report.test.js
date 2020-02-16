const Report = require('../models/reportModel');
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

describe('Report Schema test anything', () => {
    // the code below is for insert testing
    it('Add Report testing anything', () => {
        const report = {
            'report_name': 'headache',
            'report_date': '16/02/2020'
        };

        return Report.create(report)
            .then((pro_ret) => {
                expect(pro_ret.report_name).toEqual('headache');
            });
    });
    //test for update
    it('to test the update', async () => {

        return Report.findOneAndUpdate({ report_name: 'headache' }, { $set: { report_name: 'test' } })
            .then((pp) => {
                expect(pp.report_date).toEqual('16/02/2020')
            })
    });
    // the code below is for delete testing
    it('to test the delete is working or not', async () => {
        const status = await Report.deleteMany();
        expect(status.ok).toBe(1);
    });
})