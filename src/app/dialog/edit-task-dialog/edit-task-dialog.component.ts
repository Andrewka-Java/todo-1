import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Task } from 'src/app/model/Task';
import {DataHandlerService} from '../../service/data-handler.service';
import {Category} from '../../model/Category';
import {Priority} from '../../model/Priority';
import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';
import {OperType} from '../OperType';

@Component({
  selector: 'app-edit-task-dialog',
  templateUrl: './edit-task-dialog.component.html',
  styleUrls: ['./edit-task-dialog.component.css']
})
export class EditTaskDialogComponent implements OnInit {

  categories: Category[];
  priorities: Priority[];

  dialogTitle: string;
  task: Task;
  tmpDate: Date;

  tmpTitle: string;
  tmpCategory: Category;
  tmpPriority: Priority;
  operType: OperType;

  constructor(
    private dialogRef: MatDialogRef<EditTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: [Task, string, OperType], // data sand to dialog window
    private dataHandler: DataHandlerService,
    private dialog: MatDialog
    ) {

  }


  ngOnInit(): void {
    this.task = this.data[0];
    this.dialogTitle = this.data[1];
    this.operType = this.data[2];

    this.tmpTitle = this.task.title;
    this.tmpCategory = this.task.category;
    this.tmpPriority = this.task.priority;
    this.tmpDate = this.task.date;

    this.dataHandler.getAllCategory().subscribe(items => this.categories = items);
    this.dataHandler.getAllPriority().subscribe(priorities => this.priorities = priorities);
  }

  onConfirm(): void {
    this.task.title = this.tmpTitle;
    this.task.category = this.tmpCategory;
    this.task.priority = this.tmpPriority;

    this.dialogRef.close(this.task);
  }

  onCancel(): void {
    this.dialogRef.close(null);
  }

  delete(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: '500px',
      data: {
        dialogTitle: 'Confirm action',
        message: `Do you want delete task: "${this.task.title}"?`
      },
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dialogRef.close('delete');
      }
    });
  }


  // Закрывает окно, дальше это слушат tasks-component в openEditTaskDialog
  complete(): void {
    this.dialogRef.close('complete');
  }

  activate(): boolean {
    this.dialogRef.close('activate');
    return true;
  }

  canDelete(): boolean {
    return this.operType === OperType.EDIT;
  }

  canActivateDesactivete(): boolean {
    return this.operType === OperType.EDIT;
  }
}


