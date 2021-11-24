import { Injectable, OnInit } from '@angular/core';
import { User } from '../config/config'

@Injectable()
export class UserListService  {
  usersList:any;
  constructor() { 
    
   this.updateUsersList();
  }

  updateUsersList(){
    this.usersList = [...this.usersListData];
    console.log(this.usersList);
  }
  getUser(){
    return this.usersList;
  };
  nameIncrease(arg: number){     
    this.usersList.sort(function(item1: User,item2: User){
       if(item1.name < item2.name) return -arg;
       if(item1.name > item2.name) return arg;
       return 0
    });
  };
  ageIncrease(arg: number){    
    //extract that include property age and not
    let arr1 = this.usersList.filter((item: User) => {return !(item.age === undefined)}) 
    let arr2 = this.usersList.filter((item: User) => {return (item.age === undefined)}) 
    console.log(arr1);
    console.log(arr2);
    
  
    arr1.sort(function(item1: User,item2: User){
        if(item1.age === undefined) return -arg
        if(item1.age < item2.age) return -arg;
        if(item1.age > item2.age) return arg;
    
       return 0
    });
      this.usersList = arr1.concat(arr2);
    console.log(this.usersList);
  }
  ///section for handler
    filterHandler(data: string){
      this.usersList =  this.usersList.filter((item: User) => {
         if(data.toLowerCase()=== item.name.toLowerCase().slice(0,data.length)) return true;
       return false;
      })
       console.log(this.usersList);
      
    }


  usersListData: User[] = []
 
}
