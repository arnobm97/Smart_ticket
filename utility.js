
  const buyTicketBtn = document.getElementById('buy-ticket-btn');
  const ticketSection = document.getElementById('ticket-section');

  buyTicketBtn.addEventListener('click', () => {
    ticketSection.scrollIntoView({ behavior: 'smooth' });
  });





document.getElementById('openModalButton').addEventListener('click', function() {
  
  document.getElementById('imageInModal').src = './images/model.png';

  
  document.getElementById('modalContainer').classList.remove('hidden');
});

document.getElementById('closeModalButton').addEventListener('click', function() {
  document.getElementById('modalContainer').classList.add('hidden');
});


const seatContainer = document.getElementById('seatContainer');
const seatElements = Array.from(seatContainer.getElementsByClassName('seat'));
let selectedSeats = 0;
let totalPrice = 0;

function updateSeatsLeft() {
    document.getElementById('seats-left').innerText = 40 - selectedSeats + ' Seats left';
}

function updateSeatsAdded() {
    document.getElementById('seats-added').innerText = ' Seats ' + selectedSeats  ;
}

function updateTotalPrice() {
    document.getElementById('total-price').innerText = totalPrice;
}

seatElements.forEach((seat, i) => {
    seat.addEventListener('click', function() {
        if (seat.style.backgroundColor === 'var(--primary-700,#1DD100)') {
            alert('This seat has already been selected.');
        } else if (selectedSeats < 4) {
            seat.style.backgroundColor = 'var(--primary-700,#1DD100)';
            seat.style.color = 'white';
            selectedSeats++;
            totalPrice += 550; 
            updateSeatsLeft();
            updateSeatsAdded();
            updateTotalPrice();
        } else {
            alert('You can only select 4 seats.');
        }
    });
  });
  
  document.getElementById('applyButton').addEventListener('click', function() {
    const couponCode = document.getElementById('couponCode').value;
    let discount = 0;

    if (couponCode === 'NEW15') {
        discount = 0.15;
    } else if (couponCode === 'COUPLE 20') {
        discount = 0.2;
    } else {
        alert('Invalid coupon');
        return;
    }
    updateTotalPrice();
    const updatedTotalPrice = updateTotalPrice(totalPrice);
    parseInt(totalPrice);
    const discountedPrice = updatedTotalPrice - (totalPrice * discount);
    console.log('Discounted price:', discountedPrice);

   
    document.getElementById('couponSection').style.display = 'none';

    document.getElementById('grandTotal').innerText = '' + discountedPrice;
});