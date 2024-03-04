import React from 'react'
import './HeroSection.css'
// import { Card } from './Card'
// import banner from '../Images/banner.jpg'
// import phone from '../Images/phone.jpg'
import box1 from '../Images/box1.jpg'
import box2 from '../Images/box2.jpg'
import kids from '../Images/kids.jpg'
import beautypicks from '../Images/beautypicks.jpg'
import medicines from '../Images/medicines.jpg'
import shampoo from '../Images/shampoo.jpg'
import hairoil from '../Images/hairoil.jpg'
import mois from '../Images/mois.jpg'
import watch from '../Images/watch.jpg'
import camera from '../Images/camera.jpg'
import bluetoothspeaker from '../Images/bluetoothspeaker.jpg'
import phone from '../Images/phone.jpg'

export const HeroSection = () => {
    return (
        <>

            <div className="hero-image"></div>
            <div className="deals">
                <p>You are on Shop-Topia</p> <br />
                <h1>Crazy</h1>
                <br />
                <h4>DEALS</h4>
            </div>
            {/* Shop-section */}
            <h2>Fashion</h2>
            <div class="tshirt-item">
                <div class="product-card">
                    <img src={box1} alt="Product Image"
                        class="product-image" />
                    <h2 class="product-name">Men's Wear</h2>
                    <p class="product-price">50-70% Off</p>
                    <button class="add-to-cart-btn">See more...</button>
                </div>

                <div class="product-card">
                    <img src={box2} alt="Product Image"
                        class="product-image" />
                    <h2 class="product-name">Women's Wear</h2>
                    <p class="product-price">50-70% Off</p>
                    <button class="add-to-cart-btn">See more...</button>
                </div>
                <div class="product-card">
                    <img src={kids} alt="Product Image"
                        class="product-image" />
                    <h2 class="product-name">Kid's Wear</h2>
                    <p class="product-price">50-70% Off</p>
                    <button class="add-to-cart-btn">See more...</button>
                </div>
                <div class="product-card">
                    <img src={beautypicks} alt="Product Image"
                        class="product-image" />
                    <h2 class="product-name">Accessories</h2>
                    <p class="product-price">50-70% Off</p>
                    <button class="add-to-cart-btn">See more...</button>
                </div>
            </div>

            <h2>Health & Personal Care</h2>
            <div class="tshirt-item">
                <div class="product-card">
                    <img src={medicines} alt="Product Image"
                        class="product-image" />
                    <h2 class="product-name">Medicines</h2>
                    <p class="product-price">50-70% Off</p>
                    <button class="add-to-cart-btn">See more...</button>
                </div>

                <div class="product-card">
                    <img src={shampoo} alt="Product Image"
                        class="product-image" />
                    <h2 class="product-name">Shampoo & Conditioners</h2>
                    <p class="product-price">50-70% Off</p>
                    <button class="add-to-cart-btn">See more...</button>
                </div>
                <div class="product-card">
                    <img src={hairoil} alt="Product Image"
                        class="product-image" />
                    <h2 class="product-name">Hair Oils & Body Oils</h2>
                    <p class="product-price">50-70% Off</p>
                    <button class="add-to-cart-btn">Add to Cart</button>
                </div>
                <div class="product-card">
                    <img src={mois} alt="Product Image"
                        class="product-image" />
                    <h2 class="product-name">Moisturizer & Sun-Screens</h2>
                    <p class="product-price">50-70% Off</p>
                    <button class="add-to-cart-btn">See more...</button>
                </div>
            </div>


            <h2>Electronics</h2>
            <div class="tshirt-item">
                <div class="product-card">
                    <img src={phone} alt="Product Image"
                        class="product-image" />
                    <h2 class="product-name">Smartphones</h2>
                    <p class="product-price">50-70% Off</p>
                    <button class="add-to-cart-btn">See more...</button>
                </div>

                <div class="product-card">
                    <img src={camera} alt="Product Image"
                        class="product-image" />
                    <h2 class="product-name">Cameras</h2>
                    <p class="product-price">50-70% Off</p>
                    <button class="add-to-cart-btn">See more...</button>
                </div>
                <div class="product-card">
                    <img src={bluetoothspeaker} alt="Product Image"
                        class="product-image" />
                    <h2 class="product-name">Speakers</h2>
                    <p class="product-price">50-70% Off</p>
                    <button class="add-to-cart-btn">See more...</button>
                </div>
                <div class="product-card">
                    <img src={watch} alt="Product Image"
                        class="product-image" />
                    <h2 class="product-name">Watches</h2>
                    <p class="product-price">50-70% Off</p>
                    <button class="add-to-cart-btn">See more...</button>
                </div>




            </div>
            {/* <footer class="footer">
                <div class="footer-bottom">
                    <p>&copy; 2024 ShopTopia. All rights reserved.</p>
                </div>
            </footer> */}
            <footer>
                <div class="foot-panel1">
                    Back to top
                </div>
                <div class="foot-panel2">
                    <ul>
                        <p>Get to Know Us</p>
                        <a>Careers</a>
                        <a>Blog</a>
                        <a>About Shop-Topia</a>
                        <a>Investor Relations</a>
                        <a>Shop-Topia Devices</a>
                        <a>Connect With Us:
                            <div className='social-handle'> 
                            <svg className='social-icons' fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                            <svg className='social-icons' fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"  viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                            <svg className='social-icons' fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"  viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                            </div>
                        </a>
                    </ul>
                </div>

                <div class="foot-panel3">
                    <div>
                        <p className='web-name'>Shop-Topia</p>
                    </div>
                </div>

                <div class="foot-panel4">
                    <div class="pages">
                        <a>Conditions of Use</a>
                        <a>Privacy Notice</a>
                        <a>Your Ads Privacy Choices</a>
                    </div>
                    <div class="footer-bottom">
                        <p>&copy; 2024 ShopTopia. All rights reserved.</p>
                    </div>
                </div>
            </footer>




        </>
    )
}
