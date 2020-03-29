import { Client } from '@elastic/elasticsearch';
import { Client as oldClientii } from 'elasticsearch';

const client = new Client({ node: 'http://127.0.0.1:9200/', });
// const oldclient = new oldClientii({ host: 'http://127.0.0.1:9200/' });

const createIndex = async () => {
    const result = await client.create({
        index: 'posts',
        id: '11',
        body: {
            name: 'attalli',
            age: 25
        }
    }, (err, r) => {
        console.log('---------------------------err----------------------------');
        console.log(err);
        console.log('---------------------------err end----------------------------');
        console.log('---------------------------r----------------------------');
        console.log(r);
        console.log('---------------------------r end----------------------------');
    });
    console.log(result);
}

createIndex();