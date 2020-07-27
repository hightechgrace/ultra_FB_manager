import React, { Component, Fragment } from "react";
import {
  Icon,
  Table,
  Modal,
  Dropdown,
  Divider,
  Image,
  Form,
  Input,
  TextArea,
  Button,
  Accordion
} from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loadUserAccounts } from "../../actions/pages";

export class Listing extends Component {
  static propTypes = {
    user_accounts: PropTypes.array.isRequired,
    loadUserAccounts: PropTypes.func.isRequired
  };
  componentDidMount() {
    this.props.loadUserAccounts();
  }
  state = {
    pageId: null,
    activeIndex: -1,
    openModal: false,
    activeItemName: "",
    activeItemId: null,
    activeItemEmails: "",
    activeItemCategoryList: "",
    activeItemWebsite: "",
    activeItemPhone: "",
    activeItemSingleLineAddress: ""
  };

  openModalWithItem(account) {
    this.setState({
      openModal: true,
      activeAccountId: account.id,
      activeAccountName: account.name,
      activeAccountAbout: account.about,
      activeAccountImage: account.picture.data.url,
      activeAccountEmails: account.emails,
      activeAccountCategoryList: account.category_list,
      activeAccountWebsite: account.website,
      activeAccountPhone: account.phone,
      activeAccountSingleLineAddress: account.single_line_address
    });
  }
  close = () => this.setState({ openModal: false });

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;
    return (
      <Fragment>
        <Modal
          size="fullscreen"
          open={this.state.openModal}
          onClose={this.close}
        >
          <Modal.Header>{this.state.activeItemName}</Modal.Header>
          <Modal.Content image>
            <Image wrapped size="medium" src={this.state.activeAccountImage} />
            <Modal.Description>
              <Form>
                <Accordion>
                  <Accordion.Title
                    active={activeIndex === 0}
                    index={0}
                    onClick={this.handleClick}
                  >
                    <Form.Field
                      data-toggle="tooltip"
                      title="Click Here to edit"
                      readOnly
                      id="form-textarea-control-opinion"
                      control={TextArea}
                      label="About"
                      placeholder={this.state.activeAccountAbout}
                    />
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === 0}>
                    <Form.Field
                      id="form-textarea-control-opinion"
                      control={TextArea}
                      label="Add New- About"
                      placeholder={this.state.activeAccountAbout}
                    />
                    <Button>Save</Button>
                  </Accordion.Content>

                  <Form.Group widths="equal">
                    <Accordion.Title
                      active={activeIndex === 1}
                      index={1}
                      onClick={this.handleClick}
                    >
                      <Form.Field
                        readOnly
                        id="form-textarea-control-opinion"
                        control={Input}
                        label="Website"
                        placeholder={this.state.activeAccountWebsite}
                      />
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 1}>
                      <Form.Field
                        id="form-textarea-control-opinion"
                        control={Input}
                        label="Add New Website"
                        placeholder={this.state.activeAccountWebsite}
                      />
                      <Button>Save</Button>
                    </Accordion.Content>

                    <Accordion.Title
                      active={activeIndex === 2}
                      index={2}
                      onClick={this.handleClick}
                    >
                      <Form.Field
                        readOnly
                        id="form-textarea-control-opinion"
                        control={Input}
                        label="Phone"
                        placeholder={this.state.activeAccountPhone}
                      />
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 2}>
                      <Form.Field
                        id="form-textarea-control-opinion"
                        control={Input}
                        label="Add New Phone"
                        placeholder={this.state.activeAccountPhone}
                      />
                      <Button>Save</Button>
                    </Accordion.Content>
                  </Form.Group>

                  <Accordion.Title
                    active={activeIndex === 3}
                    index={3}
                    onClick={this.handleClick}
                  >
                    <Form.Field
                      readOnly
                      id="form-textarea-control-opinion"
                      control={TextArea}
                      label="Address"
                      placeholder={this.state.activeAccountSingleLineAddress}
                    />
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === 3}>
                    <Form.Field
                      id="form-textarea-control-opinion"
                      control={TextArea}
                      label="Add New Address"
                      placeholder={this.state.activeAccountSingleLineAddress}
                    />
                    <Button>Save</Button>
                  </Accordion.Content>

                  <Accordion.Title
                    active={activeIndex === 4}
                    index={4}
                    onClick={this.handleClick}
                  >
                    <Form.Field
                      readOnly
                      id="form-input-control-error-email"
                      control={Input}
                      label="Email"
                      placeholder={this.state.activeAccountEmails}
                    />
                  </Accordion.Title>
                  <Accordion.Content active={activeIndex === 4}>
                    <Form.Field
                      id="form-input-control-error-email"
                      control={Input}
                      label="Add New Email"
                      placeholder={this.state.activeAccountEmails}
                    />
                    <Button>Save</Button>
                  </Accordion.Content>
                </Accordion>
              </Form>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.close} negative>
              Close
            </Button>
          </Modal.Actions>
        </Modal>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="center" colSpan="9">
                Listing
              </Table.HeaderCell>
            </Table.Row>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell textAlign="center" verticalAlign="middle">
                Source
              </Table.HeaderCell>
              <Table.HeaderCell textAlign="center" verticalAlign="middle">
                Name
              </Table.HeaderCell>
              <Table.HeaderCell textAlign="center" verticalAlign="middle">
                Address
              </Table.HeaderCell>
              <Table.HeaderCell textAlign="center" verticalAlign="middle">
                Phone
              </Table.HeaderCell>
              <Table.HeaderCell textAlign="center" verticalAlign="middle">
                Rating
              </Table.HeaderCell>
              <Table.HeaderCell textAlign="center" verticalAlign="middle">
                Listed
              </Table.HeaderCell>
              <Table.HeaderCell textAlign="center" verticalAlign="middle">
                Status
              </Table.HeaderCell>
              <Table.HeaderCell textAlign="center" verticalAlign="middle">
                Action
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row textAlign="center" verticalAlign="middle">
              <Table.Cell textAlign="center" verticalAlign="middle">
                <Icon size="big" name="google plus g" />
              </Table.Cell>
              <Table.Cell>Goggle</Table.Cell>
              <Table.Cell>ABCD</Table.Cell>
              <Table.Cell>ACBD Street New</Table.Cell>
              <Table.Cell>+987654321321</Table.Cell>
              <Table.Cell>3/4</Table.Cell>
              <Table.Cell>Yes</Table.Cell>
              <Table.Cell textAlign="center" verticalAlign="middle">
                <Icon size="big" color="green" name="check" />
              </Table.Cell>
              <Table.Cell />
            </Table.Row>
            <Table.Row textAlign="center" verticalAlign="middle">
              <Table.Cell textAlign="center" verticalAlign="middle">
                <Icon size="big" name="google plus g" />
              </Table.Cell>
              <Table.Cell>Goggle</Table.Cell>
              <Table.Cell>ABCD</Table.Cell>
              <Table.Cell>ACBD Street New</Table.Cell>
              <Table.Cell>+987654321321</Table.Cell>
              <Table.Cell>3/4</Table.Cell>
              <Table.Cell>Yes</Table.Cell>
              <Table.Cell textAlign="center" verticalAlign="middle">
                <Icon size="big" color="green" name="check" />
              </Table.Cell>
              <Table.Cell />
            </Table.Row>
            <Table.Row textAlign="center" verticalAlign="middle">
              <Table.Cell textAlign="center" verticalAlign="middle">
                <Icon size="big" name="facebook f" />
              </Table.Cell>
              <Table.Cell>Facebook</Table.Cell>
              <Table.Cell>ABCD</Table.Cell>
              <Table.Cell>ACBD Street New</Table.Cell>
              <Table.Cell>+987654321321</Table.Cell>
              <Table.Cell>3/4</Table.Cell>
              <Table.Cell>Yes</Table.Cell>
              <Table.Cell textAlign="center" verticalAlign="middle">
                <Icon size="big" color="red" name="close" />
              </Table.Cell>
              <Table.Cell>
                <Dropdown text="Update" color="teal">
                  <Dropdown.Menu>
                    {this.props.user_accounts.map(account => (
                      <Dropdown.Item
                        key={account.id}
                        text={account.name}
                        image={account.picture.data.url}
                        onClick={() => this.openModalWithItem(account)}
                      />
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </Table.Cell>
            </Table.Row>
            <Table.Row textAlign="center" verticalAlign="middle">
              <Table.Cell textAlign="center" verticalAlign="middle">
                <Icon size="big" name="google plus g" />
              </Table.Cell>
              <Table.Cell>Goggle</Table.Cell>
              <Table.Cell>ABCD</Table.Cell>
              <Table.Cell>ACBD Street New</Table.Cell>
              <Table.Cell>+987654321321</Table.Cell>
              <Table.Cell>3/4</Table.Cell>
              <Table.Cell>Yes</Table.Cell>
              <Table.Cell textAlign="center" verticalAlign="middle">
                <Icon size="big" color="green" name="check" />
              </Table.Cell>
              <Table.Cell />
            </Table.Row>
          </Table.Body>
        </Table>
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  user_accounts: state.reducerPages.user_accounts
});
export default connect(
  mapStateToProps,
  { loadUserAccounts }
)(Listing);