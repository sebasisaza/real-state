import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Property {
  id: number;
  title: string;
  description: string;
  image: string;
  bedrooms: number;
  area: number;
  price: number;
  location: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  properties: Property[] = [
    {
      id: 1,
      title: 'Modern Downtown Apartment',
      description: 'Beautiful 2-bedroom apartment with stunning city views, modern amenities, and convenient location near shopping and restaurants.',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
      bedrooms: 2,
      area: 1200,
      price: 450000,
      location: 'Downtown'
    },
    {
      id: 2,
      title: 'Family Home with Garden',
      description: 'Spacious 4-bedroom family home featuring a beautiful garden, updated kitchen, and plenty of natural light throughout.',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop',
      bedrooms: 4,
      area: 2800,
      price: 750000,
      location: 'Suburban'
    },
    {
      id: 3,
      title: 'Luxury Penthouse',
      description: 'Exclusive penthouse with panoramic views, high-end finishes, and premium amenities including rooftop terrace.',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
      bedrooms: 3,
      area: 2200,
      price: 1200000,
      location: 'Uptown'
    },
    {
      id: 4,
      title: 'Cozy Studio Apartment',
      description: 'Perfect starter home or investment property with modern design, efficient layout, and great location.',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop',
      bedrooms: 1,
      area: 650,
      price: 280000,
      location: 'Midtown'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    console.log('Home component initialized');
  }

  viewPropertyDetails(property: Property): void {
    console.log('Viewing details for:', property.title);
    // TODO: Navigate to property details page
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  }
}
