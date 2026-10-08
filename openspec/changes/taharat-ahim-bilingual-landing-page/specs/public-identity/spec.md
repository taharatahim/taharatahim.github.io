## ADDED Requirements

### Requirement: Public service identity and affiliation
The landing page SHALL identify the service as Taharat Ahim Bot and state in the selected language that it is a project of Shevet Ahim. It SHALL link to the official Shevet Ahim website at `https://shevetahim.com/`.

#### Scenario: Visitor verifies organizational affiliation
- **WHEN** a visitor opens the landing page in either supported language
- **THEN** the page identifies Taharat Ahim Bot as a project of Shevet Ahim and provides a working link to the official Shevet Ahim website

### Requirement: Accurate description of service boundaries
The landing page SHALL explain that the bot helps route halakhic questions to rabbis and coordinate requests for fabrics or garments submitted for review related to family purity. It SHALL make clear that the bot guides or coordinates the process and is not itself the source of rabbinic rulings.

#### Scenario: Visitor understands the halakhic question service
- **WHEN** a visitor reads the service description
- **THEN** the visitor can tell that halakhic questions are received by rabbis, and the bot facilitates the request rather than providing the ruling

#### Scenario: Visitor understands the fabric or garment review service
- **WHEN** a visitor reads the service description
- **THEN** the visitor can tell that the service coordinates submission and pickup of fabrics or garments for review related to family purity

### Requirement: Verified public contact and privacy information
The landing page SHALL provide a route to contact or learn more about the responsible community through the official Shevet Ahim website. Any specific privacy, confidentiality, data-use, response-time, or religious-oversight claims SHALL be included only when verified and approved by the project or organization.

#### Scenario: Visitor seeks an organizational contact route
- **WHEN** a visitor wants more information about the service
- **THEN** the page provides a working route to the official Shevet Ahim website

#### Scenario: Unverified privacy or service claim is unavailable
- **WHEN** a privacy or service detail has not been confirmed by the project or organization
- **THEN** the page does not present that detail as a guarantee or fact
