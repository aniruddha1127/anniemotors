// Wait for the page to load
document.addEventListener('DOMContentLoaded', () => {
    // Get all car selection buttons
    const buttons = document.querySelectorAll('.select-btn');

    // Add click event to each button
    buttons.forEach(button => {
        button.addEventListener('click', showCarDetails);
    });
});

// Function to show car details in a popup
function showCarDetails(event) {
    const card = event.target.closest('.car-card');
    const name = card.querySelector('h3').textContent;
    const specs = card.querySelector('.specs').textContent;
    const price = card.querySelector('.price').textContent;

    // Additional car information object
    const carInfo = {
        'Land Rover Defender': {
            engine: '3.0L I6 Twin-Turbo',
            power: '395 hp',
            torque: '406 lb-ft',
            acceleration: '0-60 mph in 5.8s',
            features: 'All-Terrain Progress Control, Configurable Terrain Response, 360° Camera',
            interior: 'Premium leather seats, 10-inch Touchscreen, Meridian™ Sound System'
        },
        'Rolls-Royce Phantom VIII': {
            engine: '6.75L V12 Twin-Turbo',
            power: '563 hp',
            torque: '664 lb-ft',
            acceleration: '0-60 mph in 5.1s',
            features: 'Starlight Headliner, Rear Theater Configuration, Power Privacy Curtains',
            interior: 'Hand-crafted wood panels, Bespoke Audio System, Rear Picnic Tables'
        },
        'Mercedes-Maybach GLS': {
            engine: '4.0L V8 Biturbo',
            power: '550 hp',
            torque: '538 lb-ft',
            acceleration: '0-60 mph in 4.8s',
            features: 'E-Active Body Control, Executive Rear Seats, Burmester® 4D Surround Sound',
            interior: 'Nappa Leather, Ambient Lighting, Champagne Flute Holder'
        },
        'Mercedes-AMG G63': {
            engine: '4.0L V8 Biturbo',
            power: '577 hp',
            torque: '627 lb-ft',
            acceleration: '0-60 mph in 4.5s',
            features: 'AMG RIDE CONTROL, Three Differential Locks, Dual 12.3-inch Displays',
            interior: 'AMG Performance Seats, Carbon Fiber Trim, Ambient Lighting'
        },
        'BMW 7 Series': {
            engine: '4.4L V8 TwinPower Turbo',
            power: '523 hp',
            torque: '553 lb-ft',
            acceleration: '0-60 mph in 4.2s',
            features: 'Executive Lounge, Sky Lounge Panoramic Roof, BMW Theater Screen',
            interior: 'Merino Leather, Crystal Controls, 36-Speaker Bowers & Wilkins System'
        },
        'Bentley Bentayga': {
            engine: '4.0L V8 Twin-Turbo',
            power: '542 hp',
            torque: '568 lb-ft',
            acceleration: '0-60 mph in 4.4s',
            features: 'All-Terrain Specification, Night Vision, Head-up Display',
            interior: 'Handcrafted Wood Veneers, Naim Audio System, Rear Entertainment'
        },
        'Audi RS Q8': {
            engine: '4.0L V8 TFSI',
            power: '591 hp',
            torque: '590 lb-ft',
            acceleration: '0-60 mph in 3.7s',
            features: 'Quattro Sport Differential, All-wheel Steering, HD Matrix LED Headlights',
            interior: 'RS Sport Seats, Alcantara Headliner, Bang & Olufsen 3D Sound'
        },
        'Audi A8 L': {
            engine: '3.0L V6 TFSI',
            power: '335 hp',
            torque: '369 lb-ft',
            acceleration: '0-60 mph in 5.6s',
            features: 'Predictive Active Suspension, Dual-Pane Acoustic Glass, Remote Parking',
            interior: 'Valcona Leather, Rear Relaxation Seat, Ambient Light Plus'
        }
    };

    const carDetails = carInfo[name] || {};

    const popup = `
        <div class="popup">
            <div class="popup-content">
                <h2>${name}</h2>
                <div class="car-details">
                    <p class="price-tag">${price}</p>
                    <p class="specs-tag">${specs}</p>
                    
                    <div class="details-grid">
                        <div class="detail-item">
                            <h3>Performance</h3>
                            <p>Engine: ${carDetails.engine}</p>
                            <p>Power: ${carDetails.power}</p>
                            <p>Torque: ${carDetails.torque}</p>
                            <p>Acceleration: ${carDetails.acceleration}</p>
                        </div>
                        <div class="detail-item">
                            <h3>Key Features</h3>
                            <p>${carDetails.features}</p>
                        </div>
                        <div class="detail-item">
                            <h3>Interior Highlights</h3>
                            <p>${carDetails.interior}</p>
                        </div>
                    </div>
                </div>
                <button class="close-btn" onclick="this.parentElement.parentElement.remove()">Close</button>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', popup);

    // Add enhanced popup styles
    const style = `
        .popup {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1001;
        }
        .popup-content {
            background: white;
            padding: 2rem;
            border-radius: 15px;
            width: 90%;
            max-width: 800px;
            max-height: 90vh;
            overflow-y: auto;
        }
        .car-details {
            margin-top: 1.5rem;
        }
        .price-tag {
            font-size: 1.5rem;
            color: #2563eb;
            font-weight: 600;
            margin-bottom: 0.5rem;
        }
        .specs-tag {
            color: #64748b;
            margin-bottom: 1.5rem;
        }
        .details-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            margin-top: 1.5rem;
        }
        .detail-item {
            background: #f8fafc;
            padding: 1.5rem;
            border-radius: 10px;
        }
        .detail-item h3 {
            color: #1e293b;
            margin-bottom: 1rem;
            font-size: 1.2rem;
        }
        .detail-item p {
            margin-bottom: 0.5rem;
            color: #64748b;
            line-height: 1.6;
        }
        .close-btn {
            margin-top: 2rem;
            padding: 0.8rem 2rem;
            background: #2563eb;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background 0.3s;
        }
        .close-btn:hover {
            background: #1e40af;
        }
    `;

    const styleElement = document.createElement('style');
    styleElement.textContent = style;
    document.head.appendChild(styleElement);
}

// Tab Navigation
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all tabs and links
            document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Add active class to clicked link and corresponding tab
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).classList.add('active');
            this.classList.add('active');
        });
    });

    // Inventory Data
    const inventoryData = [
        {
            name: "Land Rover Defender",
            price: 125000,
            type: "suv",
            image: "130.avif",
            specs: "3.0L I6 • Automatic • Luxury SUV"
        },
        {
            name: "Mercedes-Maybach GLS",
            price: 165000,
            type: "suv",
            image: "mayabch.jpg",
            specs: "4.0L V8 • Automatic • Ultra Luxury SUV"
        },
        {
            name: "Mercedes-AMG G63",
            price: 175000,
            type: "suv",
            image: "peakpx (2).jpg",
            specs: "4.0L V8 Biturbo • AMG SPEEDSHIFT • Performance SUV"
        },
        {
            name: "Rolls-Royce Phantom VIII",
            price: 485000,
            type: "sedan",
            image: "phantom.jpg",
            specs: "6.75L V12 • Automatic • Ultra Luxury"
        },
        {
            name: "BMW 7 Series",
            price: 115000,
            type: "sedan",
            image: "bm7.jpeg",
            specs: "4.4L V8 • xDrive • Luxury Sedan"
        },
        {
            name: "Bentley Bentayga",
            price: 245000,
            type: "suv",
            image: "bentayaga.jpeg",
            specs: "4.0L V8 • All-Wheel Drive • Ultra Luxury SUV"
        },
        {
            name: "Audi RS Q8",
            price: 125000,
            type: "suv",
            image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6",
            specs: "4.0L V8 • Quattro • Performance SUV"
        },
        {
            name: "Audi A8 L",
            price: 105000,
            type: "sedan",
            image: "a8l.avif",
            specs: "3.0L V6 • Quattro • Luxury Sedan"
        }
    ];

    // Populate Inventory Grid
    function populateInventory(cars) {
        const grid = document.getElementById('inventoryGrid');
        if (!grid) return;
        
        grid.innerHTML = '';
        cars.forEach(car => {
            grid.innerHTML += `
                <div class="car-card">
                    <img src="${car.image}" alt="${car.name}" loading="lazy">
                    <h3>${car.name}</h3>
                    <p class="price">$${car.price.toLocaleString()}</p>
                    <p class="specs">${car.specs}</p>
                    <button class="select-btn">Learn More</button>
                </div>
            `;
        });

        // Reattach event listeners to new buttons
        const buttons = grid.querySelectorAll('.select-btn');
        buttons.forEach(button => {
            button.addEventListener('click', showCarDetails);
        });
    }

    // Filter Functionality
    const searchInput = document.querySelector('.filters input');
    const priceFilter = document.getElementById('priceFilter');
    const typeFilter = document.getElementById('typeFilter');

    function filterCars() {
        let filtered = inventoryData;
        
        if (searchInput?.value) {
            filtered = filtered.filter(car => 
                car.name.toLowerCase().includes(searchInput.value.toLowerCase())
            );
        }

        if (priceFilter?.value) {
            filtered = filtered.filter(car => 
                car.price <= parseInt(priceFilter.value)
            );
        }

        if (typeFilter?.value) {
            filtered = filtered.filter(car => 
                car.type === typeFilter.value
            );
        }

        populateInventory(filtered);
    }

    // Event Listeners
    searchInput?.addEventListener('input', filterCars);
    priceFilter?.addEventListener('change', filterCars);
    typeFilter?.addEventListener('change', filterCars);

    // Initialize inventory
    populateInventory(inventoryData);

    // Form Handling
    const registrationForm = document.getElementById('carRegistrationForm');
    const registeredVehiclesList = document.getElementById('registeredVehiclesList');
    
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const ownerName = this.querySelector('input[type="text"]').value;
            const vehicle = this.querySelector('select[name="vehicleModel"]').options[
                this.querySelector('select[name="vehicleModel"]').selectedIndex
            ].text;
            const year = this.querySelector('input[type="number"]').value;
            const contact = this.querySelector('input[type="tel"]').value;
            
            // Create new table row
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${ownerName}</td>
                <td>${vehicle}</td>
                <td>${year}</td>
                <td>${contact}</td>
                <td>${new Date().toLocaleDateString()}</td>
            `;
            
            // Add row to table
            registeredVehiclesList.appendChild(newRow);
            
            // Reset form
            this.reset();
            alert('Vehicle registration submitted successfully!');
        });
    }
});