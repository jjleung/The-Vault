'use strict';
module.exports = function() {

    let _theBox = {};

    var setValue = function(key, value){
        _theBox[key] = value;
    }

    var getValue = function(key){
        if(_theBox[key]){
            return _theBox[key];
        } else{
            return null;
        }
    }

    const myVault = {
        setValue:setValue,
        getValue:getValue
    }
  return myVault;
};