if (-1 || 0) alert( 'first' ); // yes
if (-1 && 0) alert( 'second' ); // no
if (null || -1 && 1) alert( 'third' ); // yes, (-1 && 1) goes first, then (null || 1)