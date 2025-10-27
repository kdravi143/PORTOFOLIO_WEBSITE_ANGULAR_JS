// Employee Directory Application
class EmployeeDirectory {
    constructor() {
        this.employees = [
            {
                id: 1,
                name: "Sarah Johnson",
                jobTitle: "Senior Software Engineer",
                department: "Engineering",
                location: "San Francisco",
                email: "sarah.johnson@company.com",
                phone: "(555) 123-4567",
                skills: ["React", "JavaScript", "Python", "Node.js"],
                hireDate: "2020-03-15",
                experience: "6 years",
                avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
            },
            {
                id: 2,
                name: "Michael Chen",
                jobTitle: "Product Manager",
                department: "Product",
                location: "New York",
                email: "michael.chen@company.com",
                phone: "(555) 234-5678",
                skills: ["Product Strategy", "Analytics", "Agile", "SQL"],
                hireDate: "2019-08-22",
                experience: "8 years",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
            },
            {
                id: 3,
                name: "Emily Rodriguez",
                jobTitle: "UX Designer",
                department: "Design",
                location: "Remote",
                email: "emily.rodriguez@company.com",
                phone: "(555) 345-6789",
                skills: ["Figma", "User Research", "Prototyping", "UI Design"],
                hireDate: "2021-01-10",
                experience: "5 years",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
            },
            {
                id: 4,
                name: "David Kim",
                jobTitle: "Marketing Director",
                department: "Marketing",
                location: "Toronto",
                email: "david.kim@company.com",
                phone: "(555) 456-7890",
                skills: ["Digital Marketing", "SEO", "Content Strategy", "Analytics"],
                hireDate: "2018-05-30",
                experience: "10 years",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
            },
            {
                id: 5,
                name: "Jennifer Liu",
                jobTitle: "Data Scientist",
                department: "Engineering",
                location: "San Francisco",
                email: "jennifer.liu@company.com",
                phone: "(555) 567-8901",
                skills: ["Python", "Machine Learning", "SQL", "Tableau"],
                hireDate: "2020-09-14",
                experience: "4 years",
                avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face"
            },
            {
                id: 6,
                name: "Robert Thompson",
                jobTitle: "VP of Sales",
                department: "Sales",
                location: "New York",
                email: "robert.thompson@company.com",
                phone: "(555) 678-9012",
                skills: ["Sales Strategy", "CRM", "Team Leadership", "Negotiation"],
                hireDate: "2017-02-28",
                experience: "12 years",
                avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
            },
            {
                id: 7,
                name: "Maria Gonzalez",
                jobTitle: "HR Business Partner",
                department: "HR",
                location: "Remote",
                email: "maria.gonzalez@company.com",
                phone: "(555) 789-0123",
                skills: ["Talent Acquisition", "Employee Relations", "Performance Management", "HRIS"],
                hireDate: "2019-11-05",
                experience: "7 years",
                avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
            },
            {
                id: 8,
                name: "James Wilson",
                jobTitle: "DevOps Engineer",
                department: "Engineering",
                location: "London",
                email: "james.wilson@company.com",
                phone: "(555) 890-1234",
                skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
                hireDate: "2020-07-20",
                experience: "6 years",
                avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face"
            },
            {
                id: 9,
                name: "Anna Petrov",
                jobTitle: "Finance Manager",
                department: "Finance",
                location: "Toronto",
                email: "anna.petrov@company.com",
                phone: "(555) 901-2345",
                skills: ["Financial Analysis", "Budgeting", "Excel", "QuickBooks"],
                hireDate: "2018-12-10",
                experience: "9 years",
                avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
            },
            {
                id: 10,
                name: "Kevin Patel",
                jobTitle: "Frontend Developer",
                department: "Engineering",
                location: "San Francisco",
                email: "kevin.patel@company.com",
                phone: "(555) 012-3456",
                skills: ["React", "TypeScript", "CSS", "HTML"],
                hireDate: "2021-04-12",
                experience: "3 years",
                avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
            }
        ];

        this.filteredEmployees = [...this.employees];
        this.activeFilters = {
            search: '',
            departments: [],
            locations: [],
            experience: []
        };

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.populateFilterOptions();
        this.showLoadingState();
        
        // Simulate loading delay
        setTimeout(() => {
            this.hideLoadingState();
            this.renderEmployees();
            this.updateResultsCount();
        }, 1000);
    }

    setupEventListeners() {
        // Search input
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', (e) => {
            this.handleSearch(e.target.value);
        });

        // Filter checkboxes - use event delegation
        document.addEventListener('change', (e) => {
            if (e.target.matches('input[data-filter]')) {
                this.handleFilterChange(e.target);
            }
        });

        // Clear filters
        const clearFiltersBtn = document.getElementById('clearFilters');
        clearFiltersBtn.addEventListener('click', () => {
            this.clearAllFilters();
        });

        const clearSearchBtn = document.getElementById('clearSearch');
        clearSearchBtn.addEventListener('click', () => {
            this.clearAllFilters();
        });

        // Mobile filter toggle
        const mobileFilterToggle = document.getElementById('mobileFilterToggle');
        const sidebar = document.getElementById('sidebar');
        
        mobileFilterToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });

        // Close sidebar when clicking outside on mobile
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768 && 
                sidebar.classList.contains('open') && 
                !sidebar.contains(e.target) && 
                !mobileFilterToggle.contains(e.target)) {
                sidebar.classList.remove('open');
            }
        });

        // Employee card clicks - use event delegation
        document.addEventListener('click', (e) => {
            const employeeCard = e.target.closest('.employee-card');
            if (employeeCard) {
                const employeeId = parseInt(employeeCard.dataset.employeeId);
                this.openEmployeeModal(employeeId);
            }
        });

        // Modal events
        const modal = document.getElementById('profileModal');
        const closeModalBtn = document.getElementById('closeModal');
        const modalBackdrop = modal.querySelector('.modal__backdrop');

        closeModalBtn.addEventListener('click', () => {
            this.closeModal();
        });

        modalBackdrop.addEventListener('click', () => {
            this.closeModal();
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                this.closeModal();
            }
        });

        // Employee card keyboard navigation
        document.addEventListener('keydown', (e) => {
            if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('employee-card')) {
                e.preventDefault();
                const employeeId = parseInt(e.target.dataset.employeeId);
                this.openEmployeeModal(employeeId);
            }
        });
    }

    populateFilterOptions() {
        // Get unique departments and locations
        const departments = [...new Set(this.employees.map(emp => emp.department))].sort();
        const locations = [...new Set(this.employees.map(emp => emp.location))].sort();

        // Populate department filters
        const departmentFilters = document.getElementById('departmentFilters');
        departmentFilters.innerHTML = departments.map(dept => `
            <label class="filter-option">
                <input type="checkbox" value="${dept}" data-filter="department">
                <span class="checkmark"></span>
                ${dept}
            </label>
        `).join('');

        // Populate location filters
        const locationFilters = document.getElementById('locationFilters');
        locationFilters.innerHTML = locations.map(location => `
            <label class="filter-option">
                <input type="checkbox" value="${location}" data-filter="location">
                <span class="checkmark"></span>
                ${location}
            </label>
        `).join('');
    }

    handleSearch(searchTerm) {
        this.activeFilters.search = searchTerm.toLowerCase().trim();
        this.applyFilters();
    }

    handleFilterChange(checkbox) {
        const filterType = checkbox.dataset.filter;
        const value = checkbox.value;

        // Fix the filter key mapping
        let filterKey;
        if (filterType === 'department') {
            filterKey = 'departments';
        } else if (filterType === 'location') {
            filterKey = 'locations';
        } else if (filterType === 'experience') {
            filterKey = 'experience';
        }

        if (checkbox.checked) {
            if (!this.activeFilters[filterKey].includes(value)) {
                this.activeFilters[filterKey].push(value);
            }
        } else {
            this.activeFilters[filterKey] = this.activeFilters[filterKey].filter(item => item !== value);
        }

        this.applyFilters();
    }

    applyFilters() {
        // Show loading briefly for visual feedback
        this.showLoadingState();
        
        // Apply filters immediately (remove artificial delay)
        setTimeout(() => {
            this.filteredEmployees = this.employees.filter(employee => {
                // Search filter
                if (this.activeFilters.search) {
                    const searchMatch = 
                        employee.name.toLowerCase().includes(this.activeFilters.search) ||
                        employee.jobTitle.toLowerCase().includes(this.activeFilters.search) ||
                        employee.department.toLowerCase().includes(this.activeFilters.search) ||
                        employee.skills.some(skill => skill.toLowerCase().includes(this.activeFilters.search));
                    
                    if (!searchMatch) return false;
                }

                // Department filter
                if (this.activeFilters.departments.length > 0) {
                    if (!this.activeFilters.departments.includes(employee.department)) {
                        return false;
                    }
                }

                // Location filter
                if (this.activeFilters.locations.length > 0) {
                    if (!this.activeFilters.locations.includes(employee.location)) {
                        return false;
                    }
                }

                // Experience filter
                if (this.activeFilters.experience.length > 0) {
                    const experienceYears = parseInt(employee.experience);
                    let matchesExperience = false;

                    this.activeFilters.experience.forEach(level => {
                        if (level === 'junior' && experienceYears >= 0 && experienceYears <= 3) {
                            matchesExperience = true;
                        } else if (level === 'mid' && experienceYears >= 4 && experienceYears <= 7) {
                            matchesExperience = true;
                        } else if (level === 'senior' && experienceYears >= 8) {
                            matchesExperience = true;
                        }
                    });

                    if (!matchesExperience) return false;
                }

                return true;
            });

            this.hideLoadingState();
            this.renderEmployees();
            this.updateResultsCount();
            this.renderActiveFilters();
        }, 150); // Reduced delay for better UX
    }

    clearAllFilters() {
        // Clear search
        document.getElementById('searchInput').value = '';
        
        // Clear all checkboxes
        document.querySelectorAll('input[data-filter]').forEach(checkbox => {
            checkbox.checked = false;
        });

        // Reset filters
        this.activeFilters = {
            search: '',
            departments: [],
            locations: [],
            experience: []
        };

        // Apply filters immediately
        this.filteredEmployees = [...this.employees];
        this.renderEmployees();
        this.updateResultsCount();
        this.renderActiveFilters();
    }

    renderActiveFilters() {
        const activeFiltersContainer = document.getElementById('activeFilters');
        const activeFilterTags = [];

        // Search tag
        if (this.activeFilters.search) {
            activeFilterTags.push(`
                <div class="active-filter-tag">
                    Search: "${this.activeFilters.search}"
                    <button onclick="app.removeFilter('search', '${this.activeFilters.search}')">×</button>
                </div>
            `);
        }

        // Department tags
        this.activeFilters.departments.forEach(dept => {
            activeFilterTags.push(`
                <div class="active-filter-tag">
                    ${dept}
                    <button onclick="app.removeFilter('department', '${dept}')">×</button>
                </div>
            `);
        });

        // Location tags
        this.activeFilters.locations.forEach(location => {
            activeFilterTags.push(`
                <div class="active-filter-tag">
                    ${location}
                    <button onclick="app.removeFilter('location', '${location}')">×</button>
                </div>
            `);
        });

        // Experience tags
        this.activeFilters.experience.forEach(exp => {
            const expLabel = exp === 'junior' ? 'Junior (0-3 years)' : 
                            exp === 'mid' ? 'Mid-level (4-7 years)' : 
                            'Senior (8+ years)';
            activeFilterTags.push(`
                <div class="active-filter-tag">
                    ${expLabel}
                    <button onclick="app.removeFilter('experience', '${exp}')">×</button>
                </div>
            `);
        });

        activeFiltersContainer.innerHTML = activeFilterTags.join('');
    }

    removeFilter(type, value) {
        if (type === 'search') {
            document.getElementById('searchInput').value = '';
            this.activeFilters.search = '';
        } else {
            const filterKey = type === 'department' ? 'departments' : 
                            type === 'location' ? 'locations' : 'experience';
            this.activeFilters[filterKey] = this.activeFilters[filterKey].filter(item => item !== value);
            
            // Uncheck the corresponding checkbox
            const checkbox = document.querySelector(`input[data-filter="${type}"][value="${value}"]`);
            if (checkbox) checkbox.checked = false;
        }

        this.applyFilters();
    }

    renderEmployees() {
        const grid = document.getElementById('employeeGrid');
        const noResults = document.getElementById('noResults');

        if (this.filteredEmployees.length === 0) {
            grid.innerHTML = '';
            noResults.classList.remove('hidden');
            return;
        }

        noResults.classList.add('hidden');

        grid.innerHTML = this.filteredEmployees.map(employee => `
            <div class="employee-card" tabindex="0" data-employee-id="${employee.id}">
                <div class="employee-card__header">
                    <div class="employee-card__avatar">
                        <img src="${employee.avatar}" alt="${employee.name}" loading="lazy">
                    </div>
                    <div class="employee-card__basic-info">
                        <h3>${employee.name}</h3>
                        <p class="job-title">${employee.jobTitle}</p>
                    </div>
                </div>
                <div class="employee-card__details">
                    <div class="employee-card__detail">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>${employee.department} • ${employee.location}</span>
                    </div>
                    <div class="employee-card__detail">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        <span>${employee.email}</span>
                    </div>
                    <div class="employee-card__detail">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12,6 12,12 16,14"></polyline>
                        </svg>
                        <span>${employee.experience} experience</span>
                    </div>
                </div>
                <div class="employee-card__skills">
                    ${employee.skills.slice(0, 3).map(skill => `
                        <span class="skill-tag">${skill}</span>
                    `).join('')}
                    ${employee.skills.length > 3 ? `<span class="skill-tag">+${employee.skills.length - 3} more</span>` : ''}
                </div>
            </div>
        `).join('');
    }

    openEmployeeModal(employeeId) {
        const employee = this.employees.find(emp => emp.id === employeeId);
        if (!employee) return;

        // Populate modal content
        document.getElementById('modalEmployeeName').textContent = employee.name;
        document.getElementById('modalEmployeeAvatar').src = employee.avatar;
        document.getElementById('modalEmployeeAvatar').alt = employee.name;
        document.getElementById('modalEmployeeTitle').textContent = employee.jobTitle;
        document.getElementById('modalEmployeeDepartment').textContent = employee.department;
        document.getElementById('modalEmployeeLocation').textContent = employee.location;
        document.getElementById('modalEmployeeEmail').textContent = employee.email;
        document.getElementById('modalEmployeeEmail').href = `mailto:${employee.email}`;
        document.getElementById('modalEmployeePhone').textContent = employee.phone;
        document.getElementById('modalEmployeePhone').href = `tel:${employee.phone}`;
        document.getElementById('modalEmployeeExperience').textContent = employee.experience;
        
        // Format hire date
        const hireDate = new Date(employee.hireDate);
        document.getElementById('modalEmployeeHireDate').textContent = hireDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        // Populate skills
        const skillsContainer = document.getElementById('modalEmployeeSkills');
        skillsContainer.innerHTML = employee.skills.map(skill => `
            <span class="skill-tag">${skill}</span>
        `).join('');

        // Show modal
        const modal = document.getElementById('profileModal');
        modal.classList.remove('hidden');
        
        // Focus management
        setTimeout(() => {
            document.getElementById('closeModal').focus();
        }, 100);
    }

    closeModal() {
        const modal = document.getElementById('profileModal');
        modal.classList.add('hidden');
    }

    updateResultsCount() {
        const count = this.filteredEmployees.length;
        const total = this.employees.length;
        const resultsCount = document.getElementById('resultsCount');
        
        if (count === total) {
            resultsCount.textContent = `Showing all ${total} employees`;
        } else {
            resultsCount.textContent = `Showing ${count} of ${total} employees`;
        }
    }

    showLoadingState() {
        const loadingState = document.getElementById('loadingState');
        const employeeGrid = document.getElementById('employeeGrid');
        
        if (loadingState) loadingState.classList.remove('hidden');
        if (employeeGrid) employeeGrid.style.opacity = '0.5';
    }

    hideLoadingState() {
        const loadingState = document.getElementById('loadingState');
        const employeeGrid = document.getElementById('employeeGrid');
        
        if (loadingState) loadingState.classList.add('hidden');
        if (employeeGrid) employeeGrid.style.opacity = '1';
    }
}

// Initialize the application
const app = new EmployeeDirectory();

// Handle window resize for responsive behavior
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        const sidebar = document.getElementById('sidebar');
        if (window.innerWidth > 768) {
            sidebar.classList.remove('open');
        }
    }, 250);
});