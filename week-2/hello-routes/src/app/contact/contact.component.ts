/*
============================================
; Title:  contact.component.spec.ts
; Author: Professor Krasso
; Date:   20 July 2019
; Modified By: Drew Hanson
; Description: Exercise 2.4
;===========================================
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
  <!--Section: Contact v.2-->
  <section class="mb-4 contact">

      <!--Section heading-->
      <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us, or not</h2>
      <!--Section description-->
      <p class="text-center w-responsive mx-auto mb-5">
      Leave a comment if you wish to contact us. We will get back to you when we feel like it.</p>

      <div class="row">

          <!--Grid column-->
          <div class="col-md-9 mb-md-0 mb-5 form">
              <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                  <!--Grid row-->
                  <div class="row">

                      <!--Grid column-->
                      <div class="col-md-6">
                          <div class="md-form mb-0">
                              <input type="text" id="name" name="name" class="form-control">
                              <label for="name" class="">Name</label>
                          </div>
                      </div>
                      <!--Grid column-->

                      <!--Grid column-->
                      <div class="col-md-6">
                          <div class="md-form mb-0">
                              <input type="text" id="email" name="email" class="form-control">
                              <label for="email" class="">Email</label>
                          </div>
                      </div>
                      <!--Grid column-->

                  </div>
                  <!--Grid row-->

                  <!--Grid row-->
                  <div class="row">
                      <div class="col-md-12">
                          <div class="md-form mb-0">
                              <input type="text" id="subject" name="subject" class="form-control">
                              <label for="subject" class="">Subject</label>
                          </div>
                      </div>
                  </div>
                  <!--Grid row-->

                  <!--Grid row-->
                  <div class="row">

                      <!--Grid column-->
                      <div class="col-md-12">

                          <div class="md-form">
                              <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                              <label for="message">Comments</label>
                          </div>

                      </div>
                  </div>
                  <!--Grid row-->

              </form>

              <div class="text-center text-md-left">
                  <a class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
              </div>
              <div class="status"></div>
              <br/>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-md-2 text-center">
              <ul class="list-unstyled mb-0">
                  <li><i class="fas fa-map-marker-alt fa-2x"></i>
                      <p>Salt Lake City, Utah 84087, USA</p>
                  </li>

                  <li><i class="fas fa-phone mt-4 fa-2x"></i>
                      <p>987-555-5555</p>
                  </li>

                  <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                      <p>contact@mdbootstrap.com</p>
                  </li>
              </ul>
          </div>
          <!--Grid column-->

      </div>

  </section>
  <!--Section: Contact v.2-->
  `,
  styles: [`
  .contact{
    background-color: forestgreen;
    border-radius: 10px;
    color: white;
  }
  .form{
    margin-left:15px;
  }
  `]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
