function getBasePath(){
    try{
        a.b.c()
    }catch(e){
        if(e.fileName){
            return e.fileName;
        }else if(e.sourceURL){
            return e.souceURL
        }
    }
}