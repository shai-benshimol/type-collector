export abstract class Activity {
    public abstract add(key: string, value: any): Activity;
    public abstract get<T>(key: string): any;
    public abstract remove(key: string): Activity;
    public abstract removeAll(): void;
}