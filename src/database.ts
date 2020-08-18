import { connect } from 'mongoose';

export async function initConnection() {
    await connect('mongodb://localhost/photo-db', {
        useNewUrlParser: true
    });

    console.log('database connected!');
}

