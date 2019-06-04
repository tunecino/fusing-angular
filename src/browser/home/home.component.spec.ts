import { TestBed } from '@angular/core/testing'
import { HomeComponent } from './home.component'
import { HomeTestingModule } from './home.module.testing'

describe(HomeComponent.name, () => {
  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     imports: [HomeTestingModule]
  //   }).compileComponents()
  // })

  it('should compile', () => {
    TestBed.configureTestingModule({
      imports: [HomeTestingModule]
    }).compileComponents().then(_ => {
      expect(TestBed.createComponent(HomeComponent)).toBeTruthy()
    })
  })
})