## ADDED Requirements

### Requirement: Public privacy page explains database deletion instructions and scope
The site SHALL publish a stable, publicly accessible privacy and data-deletion page in English and Spanish. It SHALL explain how to request deletion through the WhatsApp bot, that active cases block deletion until resolved, and that confirmed deletion applies to eligible data stored in the bot's database.

#### Scenario: Visitor reads deletion instructions in English
- **WHEN** a visitor opens the privacy page in English
- **THEN** the page explains the WhatsApp deletion command, confirmation, and active-case restriction

#### Scenario: Visitor reads deletion instructions in Spanish
- **WHEN** a visitor opens the privacy page in Spanish
- **THEN** the page provides equivalent instructions and meaning in Spanish

#### Scenario: Visitor understands deletion scope
- **WHEN** a visitor reads the deletion notice
- **THEN** the visitor can distinguish bot database records from WhatsApp messages and external device data

### Requirement: Public privacy page states limits on external messages and devices
The page SHALL state that the project cannot control or delete WhatsApp messages or notifications already delivered, or copies, screenshots, backups, and data on devices or services outside the project's control.

#### Scenario: Visitor asks whether deletion removes delivered messages
- **WHEN** a visitor reads the notice about deletion limits
- **THEN** the visitor is told that delivered messages and external copies are not deleted or controlled by the project

### Requirement: Public privacy page describes information and authorized access groups
The page SHALL describe the categories of information handled by the bot, identify WhatsApp and AWS as service providers for messaging, hosting, database, and operational logs, and state that information may be accessed by the technical team responsible for maintaining the bot and Taharat Ahim team members according to their assigned permissions and roles.

#### Scenario: Visitor asks what information is handled and who can access it
- **WHEN** a visitor reads the privacy page
- **THEN** the visitor can identify the information categories, service-provider roles, technical maintenance team, and role-authorized Taharat Ahim team members

### Requirement: Public privacy page accurately describes application logs
The page SHALL state that application logs omit message content, show only the last four digits of phone numbers when needed operationally, and are retained for 30 days. It SHALL NOT claim that a database deletion synchronously erases historical logs or makes masked identifiers fully anonymous.

#### Scenario: Visitor reads logging information
- **WHEN** a visitor reviews the privacy page's logging explanation
- **THEN** it accurately states the message-content exclusion, phone-number masking, and 30-day log retention

#### Scenario: Visitor asks whether database deletion immediately removes logs
- **WHEN** a visitor reads the deletion and logging sections
- **THEN** the page clarifies that historical logs expire under their retention period rather than being synchronously erased by the database deletion command
