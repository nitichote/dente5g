import { object } from '@amcharts/amcharts5';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiChoteService } from '../service/api-chote.service';
import * as m  from '../model/model';
import { SelectItem } from "primeng/api";
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  constructor(public ps:ApiChoteService) {
    
  }
  action = "add";
  displayModal: boolean | undefined;
  //dp: m.Dentpersonall = {} as m.Dentpersonall;
  dp: m.Dentpersonall ={}
  dentps=[];
  modalTitle = "เพิ่มข้อมูล";
  office = "10702";
  offices: any = [];
  level_idOptions!: SelectItem[];
  degnameOptions!: SelectItem[] ;
  position_idOptions!: SelectItem[];
  lstatusOptions!: SelectItem[] ;
  sexOptions!: SelectItem[];
  denttype_idOptions!: SelectItem[];
  sitem!: SelectItem;
  personClone:any;
  oldrow:any;
  editPerson(ob:any) {
    this.oldrow ={...ob};
  this.dp={...ob};
  this.personClone = {...ob};
/* this.dp ={
  person_id:ob.person_id,
  cid:ob.cid,
  flname:ob.flname,
  hcode:ob.hcode,
  pvcode:ob.pvcode,
  level_id:ob.level_id,
  status_id:ob.status_id,
  speccode:ob.speccode,
  yearedu:ob.yearedu,
  dateupdate:ob.dateupdate,
  position_id:ob.position_id,
  denttype_id:ob.denttype_id,
  yearstart:ob.yearstart,
  yearbirth:ob.yearbirth,
  sex:ob.sex,
  } */
  
    console.log("dp=",this.dp);
    
    this.modalTitle = "ปรับปรุงข้อมูล";
    this.action = "edit";
    this.showModalDialog();
  }
  doCancel(dp:any){
    //  this.dp = this.personClone;
      dp = {...this.personClone};
      this.displayModal=false;
    }
    doSave(dp:any){
      this.dp = {...dp};
console.log("newDP=",dp);
this.displayModal=false;
      }
  showModalDialog() {
    this.displayModal = true;
}
  getDentps() {
    this.ps.getDentps().then((x:any) => {
      this.dentps = x["message"];
     console.log(this.dentps);
     
      });
     
    } 
   
  ngOnInit(): void {
   // console.log(Object.keys(this.dp));
  
    this.getDentps();


    this.denttype_idOptions = [
      { label: "โปรดเลือกประเภท", value: "0" },
      { label: "ทันตแพทย์", value: "1" },
      { label: "ทันตาภิบาล", value: "2" },
      { label: "นักวิชาการสาธารณสุข", value: "3" },
      { label: "ผู้ช่วยทันตกรรม", value: "4" },
    ];
    this.sexOptions = [
      { label: "โปรดเลือกเพศ", value: "0" },
      { label: "ชาย", value: "1" },
      { label: "หญิง", value: "2" },
    ];
    this.lstatusOptions = [
      { label: "โปรดเลือกสถานะ", value: "0" },
      { label: "ทำงานอยู่", value: "1" },
      { label: "ลาเรียน", value: "2" },
     
    ];
    this.position_idOptions = [{ label: "โปรดเลือกสาขา", value: "0" }];
    this.level_idOptions = [
      { label: "โปรดเลือกระดับ", value: "0" },
      { label: "ประกาศนียบัตร", value: "ประกาศนียบัตร" },
      { label: "ปริญญาโท", value: "ปริญญาโท" },
      { label: "Resident", value: "Resident" },
    ];
  }

}
