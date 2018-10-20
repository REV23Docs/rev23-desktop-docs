# Payouts

Payouts in REV23 Desktop are flexible to your needs. You can payout cash nightly, write checks weekly, payout individual services. Each method will be covered in its own topic.

## Service Payouts

On occasion, you may find it necessary to selectively payout one (or a few) individual services or their tips. Perhaps the artist received a large tip today, or they need an advance to repair their car before their check that you're willing to help them out on by paying them out cash, or cutting them a check for what they've earned.

To accomplish this, open the detail view for the desired service and use the **Payout Employee** action.

## Check Payouts

## Cash Payouts

Cash payouts in REV23 Desktop are an optional payout method for shops that like to payout cash nightly to their artists. The cash payout feature looks at several factors when determining what amount each artist can be paid in cash and there are some settings that you can use to customize it to your needs.

Cash payouts are actually incredibly simple to do and a highlight feature of REV23 Desktop, so don't let the length of this topic fool you into thinking it's complicated. It is important that you understand how they're being calculated in the background so you can explain to your artists why they're receiving the amount of cash they're receiving.

### How cash payouts are calculated?
Because REV23 Desktop uses some advanced formulas to calculate cash distribution, it may not always be obvious what it is doing. But you can trust that its behaving as designed. At a high level, we look at Services and Deposits (if you advance deposits to your artists) that were paid in cash each day. On the surface, and for the most basic scenarios, this works exactly as you'd expect it to. A $200 tattoo at 50% commission, paid all in cash, the artist is eligible for $100 cash, their entire commission, or $50 cash, depending on your Default Cash Payout Mode setting in your studio's invoicing & payment options).

However, take into account when a deposit is used to reduce the balance. That same $200 tattoo with a $125 deposit, with the remaining $75 paid in cash. In this case there isn't enough cash in the drawer to payout the full commission, so it will payout what it can. And imagine an even more complex scenario, in which a husband and wife are tattooed by separate artists, deposits are used, some aftercare is purchased, they put some on credit card, maybe some on a gift card, and pay with a little bit of cash. Who gets what part of the small amount of cash here? A real head scratcher, right? Not for REV23 Desktop.

In short, Cash Payouts only look at the cash portion of the transaction. It then sets aside retail sales and tax, leaving behind only what should be split amongst services. It then determines the amount each artist is able to claim, using their percentage of the total invoice amount, and splits it proportionally, then rounds down to the nearest dollar so you're not attempting to split change, leaving their remaining commission for a check payout.

As a result of this method, you'll often see some numbers that might not make sense at first glance. When you run into a question such as "why am I paying out $22.00 in cash to Dave on a $500.00 tattoo when his commission is 60%?" you can trust that it's simply because that's all the cash there was to hand out for that particular transaction. REV23 Desktop ensures that you aren't paying out more cash than is in the drawer.

In your studio's Invoicing & Payment Options there is a "Default Cash Payout Mode" setting which controls how cash is paid out. You can read more about it in the invoicing & payment options topic.

## Paybacks

Paybacks are money that an employee owes back to the studio. These can happen for two reasons. First, deposit advances that were paid out will be paid back when the deposit is used so that the artist isn't paid twice for that deposit. Paybacks also occur if a return/refund has occurred and the commission that was paid out will be recollected.

## Payouts vs Payroll

For a variety of reasons, we do not include, nor plan to include full payroll features in REV23 Desktop. We easily provide you with your artist's and employee's gross pay information based on their commissions on services, sales, deposits, etc... as well as hourly rate that you can pass over to an accounting software package or your accountant, but we do not calculate payroll taxes or print payroll checks.

Here's the main reason: products like QuickBooks pretty much have this area covered and are trusted solutions. Breaking character of "anonymous user manual guy" and speaking as the developer of REV23 Desktop, I wouldn't personally trust packages outside of true accounting packages like QuickBooks to deal with this. We're aware of the fact that some competitors offer these features, but our tax system (at least in the United States) is complex. Tax laws change, updates have to be made yearly, etc... this is a maintenance nightmare for us and not an area we're planning on exploring. On top of ever changing laws, you need a particular certification to be "accounting software". This is not something we're interested in. My advice is to use true accounting software or an accountant for payroll.