var digitMap = {
    '0':{
       'top': true,
       'topLeft':true,
       'topRight':true,
       'center':false,
       'bottomLeft':true,
       'bottomRight':true,
       'bottom':true
    },
    '1':{
        'top': false,
        'topLeft':false,
        'topRight':true,
        'center':false,
        'bottomLeft':false,
        'bottomRight':true,
        'bottom':false
    },
    '2':{
        'top': true,
        'topLeft':false,
        'topRight':true,
        'center':true,
        'bottomLeft':true,
        'bottomRight':false,
        'bottom':true
    },
    '3':{
        'top': true,
        'topLeft':false,
        'topRight':true,
        'center':true,
        'bottomLeft':false,
        'bottomRight':true,
        'bottom':true
    },
    '4':{
        'top': false,
        'topLeft':true,
        'topRight':true,
        'center':true,
        'bottomLeft':false,
        'bottomRight':true,
        'bottom':false
    },
    '5':{
        'top': true,
        'topLeft':true,
        'topRight':false,
        'center':true,
        'bottomLeft':false,
        'bottomRight':true,
        'bottom':true
    },
    '6':{
        'top': true,
        'topLeft':true,
        'topRight':false,
        'center':true,
        'bottomLeft':true,
        'bottomRight':true,
        'bottom':true
    },
    '7':{
        'top': true,
        'topLeft':false,
        'topRight':true,
        'center':false,
        'bottomLeft':false,
        'bottomRight':true,
        'bottom':false
    },
    '8':{
        'top': true,
        'topLeft':true,
        'topRight':true,
        'center':true,
        'bottomLeft':true,
        'bottomRight':true,
        'bottom':true
    },
    '9':{
        'top': true,
        'topLeft':true,
        'topRight':true,
        'center':true,
        'bottomLeft':false,
        'bottomRight':true,
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
        'fifth':digitMap[8],
        'sixth':digitMap[8]
    }
}