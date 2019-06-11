import { Activity } from './activity.abstract';

export class StorageActivity extends Activity {
    public add(key: string, value: any): Activity {
        localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value);
        return this;
    }
    public async get<T>(key: string): Promise<T> {
        try {
            return await JSON.parse(localStorage.getItem(key) || '{}');
        } catch (error) {
            return await Object(sessionStorage.getItem(key));
        }
    }
    public remove(key: string): Activity {
        localStorage.removeItem(key);
        return this;
    }
    public removeAll(): void {
        localStorage.clear();
    }
}