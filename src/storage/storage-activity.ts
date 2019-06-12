import { Activity } from './activity.abstract';

export class StorageActivity extends Activity {
    public add(key: string | number, value: any): Activity {
        localStorage.setItem(String(key), typeof value === 'object' ? JSON.stringify(value) : value);
        return this;
    }
    public async get<T>(key: number | string): Promise<T> {
        try {
            return await JSON.parse(localStorage.getItem(String(key)));
        } catch (error) {
            return await localStorage.getItem(typeof key === 'string' ? key : String(key)) as any;
        }
    }
    public remove(key: string | number): Activity {
        localStorage.removeItem(String(key));
        return this;
    }
    public removeAll(): void {
        localStorage.clear();
    }
}