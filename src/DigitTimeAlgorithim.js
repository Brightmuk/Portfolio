var digitMap = {
    '0':{
       'top': true,
       'top-left':true,
       'top-right':true,
       'center':false,
       'bottom-left':true,
       'bottom-right':true,
       'bottom':true
    },
    '1':{
        'top': false,
        'top-left':false,
        'top-right':true,
        'center':false,
        'bottom-left':false,
        'bottom-right':true,
        'bottom':false
    },
    '2':{
        'top': true,
        'top-left':false,
        'top-right':true,
        'center':true,
        'bottom-left':true,
        'bottom-right':false,
        'bottom':true
    },
    '3':{
        'top': true,
        'top-left':false,
        'top-right':true,
        'center':true,
        'bottom-left':false,
        'bottom-right':true,
        'bottom':true
    },
    '4':{
        'top': false,
        'top-left':true,
        'top-right':true,
        'center':true,
        'bottom-left':false,
        'bottom-right':true,
        'bottom':false
    },
    '5':{
        'top': true,
        'top-left':true,
        'top-right':false,
        'center':true,
        'bottom-left':false,
        'bottom-right':true,
        'bottom':true
    },
    '6':{
        'top': true,
        'top-left':true,
        'top-right':false,
        'center':true,
        'bottom-left':true,
        'bottom-right':true,
        'bottom':true
    },
    '7':{
        'top': true,
        'top-left':false,
        'top-right':true,
        'center':false,
        'bottom-left':false,
        'bottom-right':true,
        'bottom':false
    },
    '8':{
        'top': true,
        'top-left':true,
        'top-right':true,
        'center':true,
        'bottom-left':true,
        'bottom-right':true,
        'bottom':true
    },
    '9':{
        'top': true,
        'top-left':true,
        'top-right':true,
        'center':true,
        'bottom-left':false,
        'bottom-right':true,
        'bottom':true
    }
}

export function currentDigitalTime(currentTime){
    var time = new Date();
    var formated = time.toLocaleTimeString();

    var digitalTime = {
        'first':digitMap[formated[0]],
        'second':digitMap[formated[1]],
        'third':digitMap[formated[3]],
        'fourth':digitMap[formated[4]],
        'fifth':digitMap[formated[6]],
        'sixth':digitMap[formated[7]]
    }

 return digitalTime;
}
export function defaultTime(){
    return {
        'first':digitMap[0],
        'second':digitMap[0],
        'third':digitMap[0],
        'fourth':digitMap[0],
        'fifth':digitMap[0],
        'sixth':digitMap[0]
    }
}