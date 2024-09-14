<?php

use Shuchkin\SimpleXLSX;

// Your code using SimpleXLSX goes here

if ( $xlsx = SimpleXLSX::parse('book.xlsx') ) {
    print_r( $xlsx->rows() );
} else {
    echo SimpleXLSX::parseError();
}

?>