## ADDED Requirements

### Requirement: English and Spanish content
The landing page SHALL provide complete English and Spanish versions of its identity, affiliation, service descriptions, and visitor-facing contact/privacy information. The two versions SHALL communicate equivalent meaning.

#### Scenario: Visitor selects English
- **WHEN** a visitor selects English
- **THEN** all visitor-facing landing-page content is presented in English and the document language is identified as English

#### Scenario: Visitor selects Spanish
- **WHEN** a visitor selects Spanish
- **THEN** all visitor-facing landing-page content is presented in Spanish and the document language is identified as Spanish

### Requirement: Obvious accessible language selection
The landing page SHALL provide an obvious, keyboard-operable way to switch between English and Spanish without navigating to an unrelated page. The selected language SHALL be visually identifiable.

#### Scenario: Visitor switches languages
- **WHEN** a visitor activates the language control using a pointer or keyboard
- **THEN** the equivalent content in the selected language is displayed and the active language is identifiable

### Requirement: Responsive and accessible presentation
The landing page SHALL remain readable and usable on mobile and desktop viewports, and its navigation and language selection SHALL be operable with assistive technologies and keyboard input.

#### Scenario: Visitor uses a narrow viewport
- **WHEN** a visitor opens the page on a mobile-sized viewport
- **THEN** the content remains readable and the language control and links remain usable without horizontal page scrolling

#### Scenario: Visitor navigates without a pointer
- **WHEN** a visitor uses keyboard navigation or assistive technology
- **THEN** the language control and external links have discernible names and can be reached and operated
