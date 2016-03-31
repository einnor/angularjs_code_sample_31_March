employeeApp.factory('nameService', function(){
  return {
    processNames: function(employee){
      var name  = employee.name;
      if(!name){
        return name;
      }
      var processedName = '';
      //Check if first letter is in uppercase
      if(name[0] != name[0].toUpperCase()){
        name[0] = name[0].toUpperCase();
      }
      for(var i=0; i<name.length; i++){
        //Add spaces after capital letters in the middle
        if(i > 0 && name[i] == name[i].toUpperCase()){
          processedName = processedName + ' ';
        }
        processedName = processedName + name[i];
      }
      return processedName;
    }
  };
});
