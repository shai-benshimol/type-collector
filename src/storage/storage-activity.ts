import { Activity } from './activity.abstract';

export class StorageActivity extends Activity {
    public add(key: string, value: any): Activity {
        localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : value);
        return this;
    }
    public get<T>(key: string): any {
        try {
            return JSON.parse(localStorage.getItem(key) || '{}');
        } catch (error) {
            return localStorage.getItem(key);
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