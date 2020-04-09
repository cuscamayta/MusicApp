interface Read<T> {
    retrieve: (callback: (error: Error, result: any) => void) => void;
    findById: (id: string, callback: (error: Error, result: T) => void) => void;
}

export = Read;
