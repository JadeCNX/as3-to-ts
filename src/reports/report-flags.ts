/*
export let NODE = '.<';
export let XOR_EQUAL = '^=';*/
export const enum ReportFlags {
    KEY_POINTS	        = 1,
    TRANSPILED_CODE	    = 2,
    NODES_TREE	        = 4,
    PARSER_CONTENT	    = 8,
    PARSER_FUNCTIONS	= 16,
    PARSER_IMPORTS	    = 32,
    PARSER_POINTS	    = 64,
    PARSER_DETAILS	    = 128,
    FLAG_09	= 256,
    EXT_AST_SHOW_ALL_EXTENDS        = 512,
    EXT_AST_SHOW_IMPLEMENTS	        = 1024,
    EXT_AST_SHOW_ALL_INTERFACES	    = 2048,
    EXT_AST_SHOW_MISSED_SUPERS    = 4096,
    EXT_AST_SHOW_ALL_STATIC         = 8192,
    EXT_AST_SHOW_PARENT_STATIC	    = 16384,
    EXT_AST_SHOW_CASTING_INTERFACE	= 32768,
    EXT_AST_SHOW_STATIC_VARIABLES 	  = 65536,
    SCANNER_POINTS	    = 131072,
    SCANNER_DETAILS	    = 262144,
    FLAG_20	            = 524288,
    FLAG_21	            = 1048576,
    FLAG_22	            = 2097152,
    CREATE_NODES	    = 4194304,
    FLAG_24	= 8388608,
    FLAG_25	= 16777216,
    FLAG_26	= 33554432,
    FLAG_27	= 67108864,
    FLAG_28	= 134217728,
    FLAG_29	= 268435456,
    FLAG_30	= 536870912,
    FLAG_31	= 1073741824,
    FLAG_32	= 2147483648,


    LOG_ALL = -1,
    LOG_NOTHING = 0,
    LOG_PARCER = 0 | PARSER_CONTENT | PARSER_FUNCTIONS | PARSER_IMPORTS | PARSER_POINTS | PARSER_DETAILS,
    LOG_EMITTER = 0 | CREATE_NODES | TRANSPILED_CODE,
    VERBOSE_1 = 0 | KEY_POINTS,
    VERBOSE_2 = 0 | SCANNER_POINTS | PARSER_POINTS | PARSER_FUNCTIONS | PARSER_CONTENT | KEY_POINTS | TRANSPILED_CODE | PARSER_IMPORTS ,
    VERBOSE_3 = -1
}