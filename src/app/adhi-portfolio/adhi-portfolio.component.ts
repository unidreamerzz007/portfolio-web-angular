import { Component, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-adhi-portfolio',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './adhi-portfolio.component.html',
  styleUrls: ['./adhi-portfolio.component.scss']
  
})
export class AdhiPortfolioComponent implements AfterViewInit {



  contactForm: FormGroup;

constructor(private fb: FormBuilder, private contactService: ContactService) {
  this.contactForm = this.fb.group({
    name: [''],
    email: [''],
    message: ['']
  });
}
submitForm() {
  this.contactService.sendEmail(this.contactForm.value).subscribe(
    response => {
      console.log('Email sent successfully!', response);
      alert('Your message has been sent.');
      this.contactForm.reset();
    },
    error => {
      console.error('Error sending email', error);
      alert('Failed to send message. Try again later.');
    }
  );
}

  

  ngAfterViewInit(): void {
    const pageTurnBtns = document.querySelectorAll<HTMLButtonElement>('.nextprev-btn');
    pageTurnBtns.forEach((el, index) => {
      el.onclick = () => {
        const pageTurnId = el.getAttribute('data-page');
        if (pageTurnId) {
          const pageTurn = document.getElementById(pageTurnId);
          if (pageTurn) {
            if (pageTurn.classList.contains('turn')) {
              pageTurn.classList.remove('turn');
              setTimeout(() => {
                pageTurn.style.zIndex = `${20 - index}`;
              }, 500);
            } else {
              pageTurn.classList.add('turn');
              setTimeout(() => {
                pageTurn.style.zIndex = `${20 + index}`;
              }, 500);
            }
          }
        }
      };
    });

    const pages = document.querySelectorAll<HTMLElement>('.book-page.page-right');
    const contactMeBtn = document.querySelector<HTMLButtonElement>('.btn.contact-me');
    if (contactMeBtn) {
      contactMeBtn.onclick = () => {
        pages.forEach((page, index) => {
          setTimeout(() => {
            page.classList.add('turn');
            setTimeout(() => {
              page.style.zIndex = `${20 + index}`;
            }, 500);
          }, (index + 1) * 200 + 100);
        });
      };
    }

    let totalPages = pages.length;
    let pageNumber = 0;

    const reverseIndex = () => {
      pageNumber--;
      if (pageNumber < 0) {
        pageNumber = totalPages - 1;
      }
    };

    const backProfileBtn = document.querySelector<HTMLButtonElement>('.back-profile');
    if (backProfileBtn) {
      backProfileBtn.onclick = () => {
        pages.forEach((_, index) => {
          setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');
            setTimeout(() => {
              reverseIndex();
              pages[pageNumber].style.zIndex = `${10 + index}`;
            }, 500);
          }, (index + 1) * 200 + 100);
        });
      };
    }

    const coverRight = document.querySelector<HTMLElement>('.cover.cover-right');
    const pageLeft = document.querySelector<HTMLElement>('.book-page.page-left');
    
    if (coverRight) {
      setTimeout(() => {
        coverRight.classList.add('turn');
      }, 2100);
      
      setTimeout(() => {
        coverRight.style.zIndex = '-1';
      }, 2800);
    }
    
    if (pageLeft) {
      setTimeout(() => {
        pageLeft.style.zIndex = '20';
      }, 3200);
    }
    
    pages.forEach((_, index) => {
      setTimeout(() => {
        reverseIndex();
        pages[pageNumber].classList.remove('turn');
        setTimeout(() => {
          reverseIndex();
          pages[pageNumber].style.zIndex = `${10 + index}`;
        }, 500);
      }, (index + 1) * 200 + 2100);
    });
  }
}