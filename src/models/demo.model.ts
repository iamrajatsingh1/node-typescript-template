import * as mongoose from 'mongoose';

const demoSchema = new mongoose.Schema({
	demo:String
}, { timestamps: true });

demoSchema.index({uuid: 1});
demoSchema.index({keyName: 1});

const Demo = mongoose.model("Demo", demoSchema, 'demo');

export default Demo;
