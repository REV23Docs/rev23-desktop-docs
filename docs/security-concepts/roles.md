# Roles

Roles are sets of individual permissions that control what your users are able to see and do in REV23 Desktop. An employee must be assigned one or more roles in order to log on to REV23 Desktop.

Each role contains settings such as the ability to print and export, as well as a list of type permissions (appointments, services, customers all being different types). Along with each type you're able to specify what users in that role are able to do: Read (see data), Write (save data), Create (create new records), Delete (delete records) and/or Navigate (visible in the navbar).

Roles also evaluate permissions from the bottom up, meaning the lowest level permission always wins. As an example, you assign a user to the manager role, then assign them to a lower role such as cashier, some things may be disallowed. For this reason, if you want to assign a user to the manager role that should be the only role they're assigned to.

Several roles for the most common scenarios are built-in and should mostly suit your needs. If you need to modify roles at any time you should not modify the built-in roles as they are overwritten with each REV23 Desktop update and your changes would be lost. Instead you can either clone an existing role to make minor tweaks, or create a new role entirely, which will remain untouched during system updates. Roles can get quite complex, and this topic will only cover the very basics. If you're interested in modifying roles you should first contact REV23 Support, to explain what you would like to do so we can assist you.

> The roles that are built-in are required by the system and cannot be deleted or renamed.

## Role Additives

Some roles are known as Additive roles. These can be distinguished by the plus symbol (+) in front of their name. For example, the + Discounts, and + Payouts roles.

Additive roles are not full roles themselves, and only add functionality to existing roles. For example, be default, only the Manager role can add discounts to services and retail items. By adding the + Discounts role to a user in the cashier role, that user will now be able to discount services and items.


## A warning about creating custom roles

There are some drawbacks to creating/cloning your own roles. If a type permission does not exist in a role, it will deny access completely. So, take the built-in Inventory Manager role for example. It contains all of the types used for inventory configuration and management. Lets say you like the Inventory Manager as it is, but want to make one minor change... you want to prevent those users from deleting inventory items. You could clone the role, remove the delete permission from the Inventory Item type and then assign the new role to your users and everything will work great. However, if in a new version of REV23 Desktop we introduce a new inventory configuration object, our built-in Inventory Manager role would include that new type, but your cloned version would not. Because of this you would not immediately see the new object type (or perhaps not even know that it exists at all), until you manually add the type to your custom role. For this reason we recommend sticking to the default roles or creating additive roles.

If you have suggestions on how we can improve the default roles, please let us know.

## Connected Studio Behavior

Roles are global and do not differ between your connected studios. However, users can exist in different roles in each of your studios. So you could have a piercer that travels between two of your studios in the service provider role, but also exist in the manager role in their primary studio.