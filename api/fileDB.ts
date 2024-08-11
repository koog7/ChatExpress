import { promises as fs } from 'fs';

interface MessageProps {
    id: string;
    author: string;
    message: string;
    date: string;
}

const filename = './db.json';
let data: MessageProps[] = [];

const fileDb = {
    async init() {
        try {
            const fileContents = await fs.readFile(filename);
            data = JSON.parse(fileContents.toString());
        } catch (e) {
            data = [];
        }
    },
    async getItems() {
        return data;
    },
    async addItem(item: MessageProps) {
        data.push(item);
        await this.save();
    },
    async save() {
        return fs.writeFile(filename, JSON.stringify(data , null , 2));
    }
};

export default fileDb;