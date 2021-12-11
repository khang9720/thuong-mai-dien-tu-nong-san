import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-edit-info',
  templateUrl: './edit-info.component.html',
  styleUrls: ['./edit-info.component.scss'],
})
export class EditInfoComponent implements OnInit {
  current = 1

  index = ''

  constructor() {}

  ngOnInit(): void {}
}
