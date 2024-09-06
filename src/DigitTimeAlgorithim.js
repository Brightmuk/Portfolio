var digitMap = {
    0:{
       'top': true,
       'top-left':true,
       'top-right':true,
       'center':false,
       'bottom-left':true,
       'bottom-right':true,
       'bottom':true
    },
    1:{
        'top': false,
        'top-left':true,
        'top-right':true,
        'center':false,
        'bottom-left':false,
        'bottom-right':false,
        'bottom':false
    },
    2:{
        'top': true,
        'top-left':false,
        'top-right':true,
        'center':true,
        'bottom-left':true,
        'bottom-right':false,
        'bottom':true
    },
    3:{
        'top': true,
        'top-left':false,
        'top-right':true,
        'center':false,
        'bottom-left':false,
        'bottom-right':true,
        'bottom':true
    },
    4:{
        'top': false,
        'top-left':true,
        'top-right':true,
        'center':true,
        'bottom-left':false,
        'bottom-right':true,
        'bottom':false
    },
    5:{
        'top': true,
        'top-left':true,
        'top-right':false,
        'center':true,
        'bottom-left':false,
        'bottom-right':true,
        'bottom':true
    },
    6:{
        'top': true,
        'top-left':true,
        'top-right':false,
        'center':false,
        'bottom-left':true,
        'bottom-right':true,
        'bottom':true
    },
    7:{
        'top': true,
        'top-left':false,
        'top-right':true,
        'center':false,
        'bottom-left':false,
        'bottom-right':true,
        'bottom':false
    },
    8:{
        'top': true,
        'top-left':true,
        'top-right':true,
        'center':true,
        'bottom-left':true,
        'bottom-right':true,
        'bottom':true
    },
    9:{
        'top': true,
        'top-left':true,
        'top-right':true,
        'center':false,
        'bottom-left':false,
        'bottom-right':true,
        'bottom':true
    }
}

export function currentDigitalTime(){
 var exampleTime = {
    'first':digitMap[0],
    'second':digitMap[5],
    'third':digitMap[2],
    'fourth':digitMap[8]
 }
 return exampleTime;
}