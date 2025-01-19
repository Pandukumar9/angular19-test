import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { NgIf } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-user-form',
  imports: [MatFormFieldModule,ReactiveFormsModule,MatSelectModule,MatInputModule,NgIf,MatButtonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  userForm!: FormGroup;
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    public dialogRef: MatDialogRef<UserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.isEditMode = this.data.isEditMode;
    const user = this.data.user || { name: '', email: '', role: '' };

    this.userForm = this.fb.group({
      id: [user.id || null],
      name: [user.name, [Validators.required]],
      email: [user.email, [Validators.required, Validators.email]],
      role: [user.role, [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      const user = this.userForm.value;

      if (this.isEditMode) {
        this.userService.updateUser(user);
      } else {
        this.userService.addUser(user);
      }

      this.dialogRef.close(true);
    }
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
