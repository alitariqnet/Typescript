class Foo {
    static count = 0;
 
    get count() {
        return Foo.count;
    }
 
    static {
        try {
        
            console.log(Foo.count) 
        }
        catch {}
    }
    
}

