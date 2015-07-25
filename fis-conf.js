
fis.config.merge({
    statics:'static',
    modules: {
        parser: {
            less: 'less',
            js: 'react'
        }
    },
    roadmap:{
        ext:{
            less:'css'
        },
        path:[
            {
                reg: /^\/modules\/([^\/]+)\/\1\.(js)$/i,
                isMod: true,
                id: '$1',
                release: '${statics}/$&'
            }
        ]
    }
});

