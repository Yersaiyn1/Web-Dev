function truncate( str, maxlength ) {
    if ( str.length > maxlength ) {
        str = str.slice(0, maxlength - 1);
        str += "…"
        return str;
    } else {
        return str;
    }
}
truncate( "What I'd like to tell on this topic is:", 20 );