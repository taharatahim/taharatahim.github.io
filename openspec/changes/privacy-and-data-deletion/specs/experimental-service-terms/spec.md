## ADDED Requirements

### Requirement: Public terms identify the service as experimental
The site SHALL publish publicly accessible terms in English and Spanish that clearly identify Taharat Ahim Bot as an experimental service that may change, fail, or be interrupted. The terms SHALL NOT guarantee availability, response times, delivery schedules, or outcomes.

#### Scenario: Visitor reads experimental status in English
- **WHEN** a visitor opens the terms page in English
- **THEN** the page states that the service is experimental and may change, fail, or be interrupted

#### Scenario: Visitor reads experimental status in Spanish
- **WHEN** a visitor opens the terms page in Spanish
- **THEN** it communicates the same experimental status and limitations in Spanish

#### Scenario: Visitor expects a guaranteed response or outcome
- **WHEN** a visitor reads the service terms
- **THEN** the terms do not promise availability, response time, delivery schedule, or outcome

#### Scenario: Visitor sees the service from the landing page
- **WHEN** a visitor opens the public landing page
- **THEN** the page visibly identifies the bot as experimental and links to its service terms

### Requirement: Terms accurately describe the service boundary and related information
The terms SHALL explain that the bot coordinates requests and routes questions but does not itself issue halakhic rulings. The terms SHALL link to the privacy notice for information about data handling and SHALL NOT claim that experimental wording alone waives legal obligations or provides complete legal protection. The terms SHALL be presented as informational service conditions, not as a substitute for a formal agreement or legal advice.

#### Scenario: Visitor seeks a religious ruling from the bot
- **WHEN** a visitor reads the terms
- **THEN** the visitor is told the bot is not itself a source of halakhic rulings

#### Scenario: Visitor seeks information about personal data
- **WHEN** a visitor reads the terms
- **THEN** the visitor can follow a link to the privacy and data-deletion notice
