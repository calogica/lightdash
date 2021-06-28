import {Explore} from "common";
import {UncompiledExplore} from "./exploreCompiler";

export const exploreOneEmptyTable: UncompiledExplore = {
    name: '',
    baseTable: 'a',
    joinedTables: [],
    tables: {
        a: {
            name: 'a',
            sqlTable: 'test.table',
            dimensions: {},
            metrics: {},
            lineageGraph: {} ,
        }
    }
}

export const exploreOneEmptyTableCompiled: Explore = {
    name: '',
    baseTable: 'a',
    joinedTables: [],
    tables: {
        a: {
            name: 'a',
            sqlTable: 'test.table',
            dimensions: {},
            metrics: {},
            lineageGraph: {} ,
        }
    }
}

export const exploreMissingBaseTable: UncompiledExplore = {
    name: '',
    baseTable: 'a',
    joinedTables: [],
    tables: {}
}

export const exploreMissingJoinTable: UncompiledExplore = {
    name: '',
    baseTable: 'a',
    joinedTables: [{
        table: 'b',
        sqlOn: '',
    }],
    tables: {
        a: {
            name: 'a',
            sqlTable: 'test.table',
            dimensions: {},
            metrics: {},
            lineageGraph: {} ,
        }
    }
}

export const exploreCircularReference: UncompiledExplore = {
    name: '',
    baseTable: 'a',
    joinedTables: [],
    tables: {
        a: {
            name: 'a',
            sqlTable: 'test.table',
            dimensions: {
                dim1: {
                    type: 'string',
                    name: 'dim1',
                    table: 'a',
                    sql: '${a.dim1}', // circular reference
                }
            },
            metrics: {},
            lineageGraph: {} ,
        }
    }
}

export const exploreTableSelfReference: UncompiledExplore = {
    name: '',
    baseTable: 'a',
    joinedTables: [],
    tables: {
        a: {
            name: 'a',
            sqlTable: 'test.table',
            dimensions: {
                dim1: {
                    type: 'string',
                    name: 'dim1',
                    table: 'a',
                    sql: '${TABLE}.dim1',
                }
            },
            metrics: {},
            lineageGraph: {} ,
        }
    }
}

export const exploreTableSelfReferenceCompiled: Explore = {
    name: '',
    baseTable: 'a',
    joinedTables: [],
    tables: {
        a: {
            name: 'a',
            sqlTable: 'test.table',
            dimensions: {
                dim1: {
                    type: 'string',
                    name: 'dim1',
                    table: 'a',
                    sql: '${TABLE}.dim1',
                    compiledSql: 'a.dim1'
                }
            },
            metrics: {},
            lineageGraph: {} ,
        }
    }
}

export const exploreReferenceDimension: UncompiledExplore= {
    name: '',
    baseTable: 'a',
    joinedTables: [],
    tables: {
        a: {
            name: 'a',
            sqlTable: 'test.table',
            dimensions: {
                dim1: {
                    type: 'string',
                    name: 'dim1',
                    table: 'a',
                    sql: '${TABLE}.dim1',
                },
                dim2: {
                    type: 'string',
                    name: 'dim2',
                    table: 'a',
                    sql: '${a.dim1}',
                }
            },
            metrics: {},
            lineageGraph: {} ,
        }
    },
}

export const exploreReferenceDimensionCompiled: Explore = {
    name: '',
    baseTable: 'a',
    joinedTables: [],
    tables: {
        a: {
            name: 'a',
            sqlTable: 'test.table',
            dimensions: {
                dim1: {
                    type: 'string',
                    name: 'dim1',
                    table: 'a',
                    sql: '${TABLE}.dim1',
                    compiledSql: 'a.dim1'
                },
                dim2: {
                    type: 'string',
                    name: 'dim2',
                    table: 'a',
                    sql: '${a.dim1}',
                    compiledSql: '(a.dim1)',
                }
            },
            metrics: {},
            lineageGraph: {} ,
        }
    },
}
export const exploreComplexReference: UncompiledExplore = {
    name: '',
    baseTable: 'a',
    joinedTables: [],
    tables: {
        a: {
            name: 'a',
            sqlTable: 'test.table',
            dimensions: {
                dim1: {
                    type: 'number',
                    name: 'dim1',
                    table: 'a',
                    sql: '${TABLE}.dim1',
                },
                dim2: {
                    type: 'number',
                    name: 'dim2',
                    table: 'a',
                    sql: '${a.dim1}',
                },
                dim3: {
                    type: 'number',
                    name: 'dim3',
                    table: 'a',
                    sql: '${TABLE}.dim3 + ${a.dim2} + ${dim1}',
                }
            },
            metrics: {
                m1: {
                    type: 'average',
                    name: 'm1',
                    table: 'a',
                    sql: '${dim3}'
                }
            },
            lineageGraph: {} ,
        }
    },
}

export const exploreComplexReferenceCompiled: Explore = {
    name: '',
    baseTable: 'a',
    joinedTables: [],
    tables: {
        a: {
            name: 'a',
            sqlTable: 'test.table',
            dimensions: {
                dim1: {
                    type: 'number',
                    name: 'dim1',
                    table: 'a',
                    sql: '${TABLE}.dim1',
                    compiledSql: 'a.dim1'
                },
                dim2: {
                    type: 'number',
                    name: 'dim2',
                    table: 'a',
                    sql: '${a.dim1}',
                    compiledSql: '(a.dim1)',
                },
                dim3: {
                    type: 'number',
                    name: 'dim3',
                    table: 'a',
                    sql: '${TABLE}.dim3 + ${a.dim2} + ${dim1}',
                    compiledSql: 'a.dim3 + ((a.dim1)) + (a.dim1)'
                }
            },
            metrics: {
                m1: {
                    type: 'average',
                    name: 'm1',
                    table: 'a',
                    sql: '${dim3}',
                    compiledSql: 'AVG((a.dim3 + ((a.dim1)) + (a.dim1)))'
                }
            },
            lineageGraph: {} ,
        }
    },
}

export const exploreReferenceInJoin: UncompiledExplore = {
    name: '',
    baseTable: 'a',
    joinedTables: [{
        table: 'b',
        sqlOn: '${a.dim1} = ${b.dim1}',
    }],
    tables: {
        a: {
            name: 'a',
            sqlTable: 'test.table',
            dimensions: {
                dim1: {
                    type: 'string',
                    name: 'dim1',
                    table: 'a',
                    sql: '${TABLE}.dim1',
                }
            },
            metrics: {},
            lineageGraph: {} ,
        },
        b: {
            name: 'b',
            sqlTable: 'test.tableb',
            dimensions: {
                dim1: {
                    type: 'string',
                    name: 'dim1',
                    table: 'b',
                    sql: '${TABLE}.dim1'
                },
                dim2: {
                    type: 'string',
                    name: 'dim2',
                    table: 'b',
                    sql: '${a.dim1}',
                }
            },
            metrics: {},
            lineageGraph: {},
        }
    }
}

export const exploreReferenceInJoinCompiled: Explore = {
    name: '',
    baseTable: 'a',
    joinedTables: [{
        table: 'b',
        sqlOn: '${a.dim1} = ${b.dim1}',
        compiledSqlOn: '(a.dim1) = (b.dim1)'
    }],
    tables: {
        a: {
            name: 'a',
            sqlTable: 'test.table',
            dimensions: {
                dim1: {
                    type: 'string',
                    name: 'dim1',
                    table: 'a',
                    sql: '${TABLE}.dim1',
                    compiledSql: 'a.dim1',
                }
            },
            metrics: {},
            lineageGraph: {} ,
        },
        b: {
            name: 'b',
            sqlTable: 'test.tableb',
            dimensions: {
                dim1: {
                    type: 'string',
                    name: 'dim1',
                    table: 'b',
                    sql: '${TABLE}.dim1',
                    compiledSql: 'b.dim1',
                },
                dim2: {
                    type: 'string',
                    name: 'dim2',
                    table: 'b',
                    sql: '${a.dim1}',
                    compiledSql: '(a.dim1)',
                }
            },
            metrics: {},
            lineageGraph: {},
        }
    }
}